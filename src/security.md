Here is a highly detailed, step-by-step `security.md` file specifically designed for an AI agent to read, understand, and execute. This framework is built to achieve that 80-90% baseline security "hard check" by focusing on the most critical vulnerabilities (secrets, database rules, input validation, and dependencies). 

Instruct your AI coding assistant (e.g., Cursor, Windsurf, or Copilot) to strictly follow this document sequentially.

***

# 🛡️ AI AGENT SECURITY CHECKLIST: SUPABASE & WEB HOSTING (`security.md`)

**CRITICAL INSTRUCTION FOR AI AGENT:** 
You must operate as a Senior Application Security Engineer. You are required to run through this checklist sequentially. You must perform **CHECK 1**, verify it passes, apply the **FIX**, and only then proceed to **CHECK 2**. Do not skip steps. Do not prioritize development speed over security.

---

## 🛠️ STEP 1: Secrets & Environment Configuration
**Goal:** Prevent catastrophic credential leaks. AI models often hardcode API keys in frontend code.

*   **THE CHECK:** Scan all frontend and backend code. Are there any plain text API keys, Supabase URLs, database passwords, or JWT secrets hardcoded in the source files? Is the `.env` file missing from `.gitignore`?
*   **PASS CRITERIA:** Zero hardcoded secrets exist in the codebase. `.gitignore` includes `.env` and `.env.local`.
*   **HOW TO FIX (Agent Action):**
    1.  Move all hardcoded secrets to a `.env` file. 
    2.  For Supabase, ensure sensitive keys (like the Service Role Key) are stored securely in Supabase Secrets or environment variables and are NEVER exposed to the frontend.
    3.  Ensure the frontend only accesses public, safe keys (e.g., `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
    4.  Add `.env` files to `.gitignore` immediately to prevent committing secrets to GitHub.

---

## 🛠️ STEP 2: Supabase Database Security (Row-Level Security)
**Goal:** Ensure users can only access their own data.
*   **THE CHECK:** Check the Supabase database schema and migrations. Are database tables fully public? Is Row-Level Security (RLS) disabled?
*   **PASS CRITERIA:** RLS is explicitly enabled on every table containing user data. Policies restrict read/write access to the authenticated user.
*   **HOW TO FIX (Agent Action):**
    1.  Do not remove RLS to bypass development errors. Fix the logic instead.
    2.  Write SQL policies for Supabase that enforce identity matching.
    3.  *Example Fix:* `CREATE POLICY "Users can only update their own data" ON "public"."profiles" FOR UPDATE USING (auth.uid() = user_id);`.
    4.  Verify that anonymous/public read access is only granted to strictly non-sensitive tables (like a public list of restaurants), while write access is always protected.

---

## 🛠️ STEP 3: API Endpoint Protection & Rate Limiting
**Goal:** Prevent Denial of Wallet (DoW), DDoS attacks, and brute-force spamming. Public APIs will get hammered by bots.

*   **THE CHECK:** Review all backend API routes and Supabase Edge Functions. Can a user or bot hit an endpoint 10,000 times a minute without being blocked?
*   **PASS CRITERIA:** All API endpoints (especially authentication, form submissions, and AI-generation routes) have strict rate limiting applied.
*   **HOW TO FIX (Agent Action):**
    1.  Install and implement a rate-limiting library (e.g., `express-rate-limit`, or `Arcjet` using the Token Bucket algorithm).
    2.  Configure the rate limit to something reasonable (e.g., 100 requests per 15 minutes for standard APIs, stricter for login/AI routes).
    3.  Implement bot protection or reCAPTCHA on public forms to prevent automated spam.

---

## 🛠️ STEP 4: Input Validation & Injection Prevention
**Goal:** Stop Cross-Site Scripting (XSS), SQL Injection, and Path Traversal. Never trust user input.

*   **THE CHECK:** Follow the data flow from frontend forms to the database. Is user input being concatenated directly into SQL queries, filesystem paths, or rendered as raw HTML?
*   **PASS CRITERIA:** All input is validated on the backend. No raw HTML directives are used. ORMs/parameterized queries are strictly enforced.
*   **HOW TO FIX (Agent Action):**
    1.  Use Supabase's built-in ORM/SDK, which naturally parameterizes queries to prevent SQL injection. Never write raw, concatenated SQL strings.
    2.  In frontend frameworks (React/Vue), explicitly search for and remove unsafe DOM directives like `dangerouslySetInnerHTML` or `v-html`. Replace them with safe, escaped string rendering.
    3.  Implement backend validation (e.g., using Zod) to ensure data types and formats are correct before hitting the database.

---

## 🛠️ STEP 5: Dependency Supply Chain ("Slop Squatting" Check)
**Goal:** Prevent the installation of hallucinated, malicious, or outdated packages.

*   **THE CHECK:** Review `package.json` or `requirements.txt`. Did the AI suggest any strange, non-standard libraries? Are there unused dependencies?
*   **PASS CRITERIA:** All dependencies are verified, necessary, and up-to-date.
*   **HOW TO FIX (Agent Action):**
    1.  Before installing any new package, verify its exact name. Attackers actively register fake package names hallucinated by AI (e.g., "