/* The ReactDOM createRoot method is used to create a root element for rendering React content. */

function App({isLoggedIn}) {
  return (
    <>
      <h1>My Application</h1>
      {isLoggedIn && <Profile /> }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
