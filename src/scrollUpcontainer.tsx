import "./App.css";

const InfiniteVerticalText = () => {
  const items = [
    "JAVASCRIPT",
    "TYPESCRIPT",
    "REACT",
    "NEXTJS",
    "NODEJS",
    "HTML",
    "CSS",
    "SCSS",
    "JSON",
    "API",
    "REST",
    "GRAPHQL",
    "FETCH",
    "AXIOS",
    "ASYNC",
    "AWAIT",
    "PROMISE",
    "FUNCTION",
    "COMPONENT",
    "PROPS",
    "STATE",
    "HOOK",
    "USEEFFECT",
    "USESTATE",
    "CONTEXT",
    "REDUX",
    "ZUSTAND",
    "WEBPACK",
    "VITE",
    "BABEL",
    "ESLINT",
    "PRETTIER",
    "GIT",
    "GITHUB",
    "DOCKER",
    "KUBERNETES",
    "CI/CD",
    "TESTING",
    "JEST",
    "CYPRESS",
    "DEBUG",
    "REFACTOR",
    "PERFORMANCE",
    "FRONTEND",
    "BACKEND",
    "FULLSTACK",
    "GRAPHICS",
    "UX/UI",
    "RESPONSIVE",
    "ACCESSIBILITY",
    "SEO",
    "WEBASSEMBLY",
    "SERVICEWORKER",
    "PWA",
    "SSR",
    "CSR",
    "DOM",
    "EVENTLOOP",
    "VIRTUALDOM",
    "MODULES",
    "PACKAGE",
    "NPM",
    "YARN",
    "MONOREPO",
    "MICROSERVICES",
    "WEBSOCKET",
    "SOCKET.IO",
    "JWT",
    "OAUTH",
    "CORS",
    "SECURITY",
    "AUTHENTICATION",
    "AUTHORIZATION",
    "ENVIRONMENT",
    "CONFIGURATION",
  ];

  const loopItems = [...items, ...items];

  return (
    <div className="scrollUpcontainer">
      <div className="listUp">
        {loopItems.map((text, i) => (
          <div key={i} className="itemUp">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteVerticalText;
