/* This code is a React component named App that uses the useState and useEffect hooks to manage data and render it using the DisplayData component. 
It also renders the App component to an HTML element with the ID 'root' using ReactDOM. */

import { useState,, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData())
  }, []);

  return <DisplayData data={data} />;
}

const root = ReactDOM.createtRoot(document.getElementById('root'));
root.render(<App />);

