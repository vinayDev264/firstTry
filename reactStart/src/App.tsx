import * as React from "react";
import FirstPage from "./pages/FirstRoute"
import {Link} from "react-router-dom"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ul>
      <li>  
        <Link to="/pageone">FirstRoute</Link>
      </li>
      <li>
        <Link to="/pagetwo">Second</Link>
      </li>  
      </ul>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      
    </div>
  );
}
