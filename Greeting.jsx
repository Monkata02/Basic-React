/*  The React content is rendered using ReactDOM. */

function Person(props) {
  return <h2>I'm { props.name }!</h2>;
}

function Greeting() {
  const name = "Jesse"
  return (
    <>
      <h1>Hello!</h1>
      <Person name=
{
 name 
}
 />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
