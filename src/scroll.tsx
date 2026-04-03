import React from "react";
import "./App.css";

const InfiniteVerticalText = () => {
const items = [
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "nodejs",
  "html",
  "css",
  "scss",
  "json",
  "api",
  "rest",
  "graphql",
  "fetch",
  "axios",
  "async",
  "await",
  "promise",
  "function",
  "component",
  "props",
  "state",
  "hook",
  "useeffect",
  "usestate",
  "context",
  "redux",
  "zustand",
  "webpack",
  "vite",
  "babel",
  "eslint",
  "prettier",
  "git",
  "github",
  "docker",
  "kubernetes",
  "ci/cd",
  "testing",
  "jest",
  "cypress",
  "debug",
  "refactor",
  "performance",
];

  const loopItems = [...items, ...items];

  return (
    <div className="container">
      <div className="list">
        {loopItems.map((text, i) => (
          <div key={i} className="item">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteVerticalText;