const fs = require('fs');
const path = require('path');
const https = require('https');

const ASSETS_DIR = path.join(__dirname, 'src', 'assets', 'supabase');
if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

function processDirectory(dir) {
    let files = [];
    fs.readdirSync(dir).forEach(file => {
        if (file === 'node_modules') return;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            files = files.concat(processDirectory(fullPath));
        } else if (file.endsWith('.jsx')) {
            files.push(fullPath);
        }
    });
    return files;
}

const allFiles = processDirectory(path.join(__dirname, 'src'));
console.log(`Found ${allFiles.length} JSX files to scan.`);

let urlMap = new Map();
const regexFull = /const\s+([a-zA-Z0-9_]+)\s*=\s*['"](https:\/\/zhianncgwtyylotoagqa\.supabase\.co\/storage\/v1\/object\/public\/images1\/([^'"]+))['"]/g;

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = regexFull.exec(content)) !== null) {
        const varName = match[1];
        const fullUrl = match[2];
        const fileName = match[3];
        urlMap.set(fullUrl, fileName);
    }
});

console.log(`Found ${urlMap.size} unique Supabase URLs assigned to variables.`);

async function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
            resolve(); // Already downloaded
            return;
        }
        const file = fs.createWriteStream(dest);
        https.get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', err => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

async function run() {
    for (let [url, fileName] of urlMap.entries()) {
        const dest = path.join(ASSETS_DIR, fileName);
        console.log(`Downloading ${fileName}...`);
        try {
            await downloadFile(url, dest);
        } catch (e) {
            console.error(`Failed to download ${url}`, e);
        }
    }

    console.log('Replacing URLs in source files...');
    allFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let original = content;

        // Calculate relative path from this file to src/assets/supabase
        const fileDir = path.dirname(file);
        let relPath = path.relative(fileDir, ASSETS_DIR).replace(/\\/g, '/');
        if (!relPath.startsWith('.')) relPath = './' + relPath;

        // Use replace loop to change `const xyz = '...'` to `import xyz from '...'`
        let match;
        const localRegex = /const\s+([a-zA-Z0-9_]+)\s*=\s*['"](https:\/\/zhianncgwtyylotoagqa\.supabase\.co\/storage\/v1\/object\/public\/images1\/([^'"]+))['"]/g;

        content = content.replace(localRegex, (fullString, varName, fullUrl, fileName) => {
            return `import ${varName} from '${relPath}/${fileName}'`;
        });

        // Also look for direct inline strings `<img src="https://..."`
        // Wait, let's just do variables first.
        if (content !== original) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated ${path.basename(file)}`);
        }
    });

    console.log('Checking for any leftover inline supabase urls...');
    let hasInline = false;
    allFiles.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        const leftoverMatches = content.match(/https:\/\/zhianncgwtyylotoagqa\.supabase\.co[^\"\'\`\s]+/gi);
        if (leftoverMatches) {
            hasInline = true;
            console.log(`Found leftover in ${path.basename(file)}: `, [...new Set(leftoverMatches)]);
        }
    });

    if (!hasInline) console.log('All Supabase URLs replaced with local imports!');
    console.log('Rewrite complete!');
}

run();
