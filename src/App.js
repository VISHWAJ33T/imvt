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
  const [apiKey, setApiKey] = useState(process.env.REACT_APP_IMVT_API_KEY_1)
  const [services, setServices] = useState(
    // "netflix,prime.buy,hulu.addon.hbo,peacock.free"
    "netflix"
  );
  return (
    <div className="app">
          <Navbar apiKey={apiKey} setApiKey={setApiKey} title={title} country={country} setCountry={setCountry} type={type} genre={genre} services={services} setType={setType} setGenre={setGenre} setServices={setServices} setTitle={setTitle} setKeyword={setKeyword} />
      <Body apiKey={apiKey} title={title} country={country} setCountry={setCountry} type={type} genre={genre} services={services} setType={setType} setGenre={setGenre} setServices={setServices} setTitle={setTitle} keyword={keyword} />
    </div>
  );
}

export default App;
