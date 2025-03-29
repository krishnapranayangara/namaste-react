const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am a H1 tag")
  ),
  "Hello, Dojo!"
);

const h1 = React.createElement(
    "h1",
    {id: "heading",xyz: "abc"},
    "Hello World from React!"
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h1);

// const heading = React.createElement('h1', {id: "heading", xyz: "abc"}, 'Hello, Dojo!');

console.log(h1);



root.render(parent);
