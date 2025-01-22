import { useEffect, useRef } from "react";
import StoriiiesViewer from "./StoriiiesViewer.ts";

function Viewer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const viewer = new StoriiiesViewer({
      container: containerRef.current,
      manifestUrl: "http://localhost:43110/manifests/standard-v3/manifest.json",
    });
  }, []);

  return <div ref={containerRef} id="storiiies-viewer"></div>;
}

export default Viewer;
