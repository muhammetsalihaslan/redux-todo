import React from "react";

function Footer() {
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Create by{" "}
        <a
          href="https://github.com/ziyacaylan"
          target="_blank"
          rel="noreferrer"
        >
          MSA
        </a>
      </p>
      <p>
        Part of{" "}
        <a
          href="https://github.com/ziyacaylan/Frontend-Dersleri/tree/main/React-Dersleri/Redux/todo-app"
          target="_blank"
          rel="noreferrer"
        >
          Todo React
        </a>
      </p>
    </footer>
  );
}

export default React.memo(Footer);
