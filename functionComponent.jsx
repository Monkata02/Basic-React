/* This code defines a React functional component Person that displays a message with a provided name and renders it using ReactDOM. */

function Person(props) {
  return <h1>Hi, I'm {props.name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Person name="Jesse"/>);
