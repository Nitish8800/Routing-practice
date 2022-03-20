import "./styles.css";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { Products } from "./Components/Product";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About />}></Route>
        <Route path={"/product/:id"} element={<Products />}></Route>
      </Routes>
    </div>
  );
}
