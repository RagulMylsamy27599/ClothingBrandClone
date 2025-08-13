import React from "react";
import { createRoot } from "react-dom/client";
import ParentClassComponent from "./ParentClassComponent";

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <ParentClassComponent name="Ragul" />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
