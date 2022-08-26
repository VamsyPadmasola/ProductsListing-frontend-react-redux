import {Routes, Route, Navigate} from "react-router-dom";
import Authentication from "./components/Auth/index.js";
import Products from "./components/bookstore/Products/Products"

function App() {
  return (
    <div className = {"divBody"}>
      <div className = {"divContent"}>
      <Routes>
        <Route path = "/:type" element = {<Authentication/>}/>
        <Route path = "/bookstore" element = {<Products/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
