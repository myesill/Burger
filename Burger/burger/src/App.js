import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/menu" exact element={<Menu />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
          <Route path="/about" exact element={<About />}></Route>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
