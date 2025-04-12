const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Hello from React Nested Components"),
      React.createElement("h2", {}, "Hello h2 from React Nested Components"),
    ]),
  ],
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from React Nested Components"),
    React.createElement("h2", {}, "Hello h2 from React Nested Components"),
  ])
);

console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!!"
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
