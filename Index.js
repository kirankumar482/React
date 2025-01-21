// Manipulate the HTML DOM using React

// Create nested React Elements
const header = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        
      }
    },
    "KKR"
  );

  const content = React.createElement(
    "p",
    {
      id: "content",
    },
    "Hi Mike!"
  );

  const footer = React.createElement(
    "h4",{},
    "Thank you"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [header, content, footer]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));

  // passing react element inside root
  root.render(container);