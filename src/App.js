import React, { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const svgRef = useRef();
  return <svg ref={svgRef}></svg>;
}

export default App;
