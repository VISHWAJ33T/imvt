import { useState } from "react";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
function App() {
  const [title, setTitle] = useState("");
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("us");
  const [type, setType] = useState("all");
  const [genre, setGenre] = useState("35");
  const [services, setServices] = useState(
    // "netflix,prime.buy,hulu.addon.hbo,peacock.free"
    "netflix"
  );
  return (
    <div className="app">
          <Navbar title={title} country={country} setCountry={setCountry} type={type} genre={genre} services={services} setType={setType} setGenre={setGenre} setServices={setServices} setTitle={setTitle} setKeyword={setKeyword} />
      <Body title={title} country={country} setCountry={setCountry} type={type} genre={genre} services={services} setType={setType} setGenre={setGenre} setServices={setServices} setTitle={setTitle} keyword={keyword} />
    </div>
  );
}

export default App;
