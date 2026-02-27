import React, { useEffect, useRef } from "react";

function SplineSceneFrame({ src, title, className = "" }) {
    const frameRef = useRef(null);

    useEffect(() => {
        return () => {
            // Explicit teardown to release WebGL memory when scene unmounts.
            if (frameRef.current) {
                frameRef.current.src = "about:blank";
            }
        };
    }, []);

    return (
        <iframe
            ref={frameRef}
            title={title}
            src={src}
            className={className}
            loading="lazy"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            style={{ transform: "translateZ(0)" }}
        />
    );
}

export default React.memo(SplineSceneFrame);
