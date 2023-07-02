import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
function App() {
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("zombie");

  return (
    <div className="app">
      {/* <BrowserRouter> */}
        {/* <Routes> */}
          <Navbar title={title} setTitle={setTitle} setKeyword={setKeyword} />
        {/* </Routes> */}
      {/* </BrowserRouter> */}
      <Body title={title} setTitle={setTitle} keyword={keyword} />
    </div>
  );
}

export default App;
