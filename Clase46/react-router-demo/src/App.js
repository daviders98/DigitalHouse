import logo from "./logo.svg";
import "./App.css";
import { Link, Route,Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products";
function App() {
  return (
    <div>
      <Link to="/">HOME</Link> <br />
      <Link to="/about">ABOUT</Link> <br />
      <Link to="/contact">CONTACT</Link> <br />
      <Link to="/products/1">PRODUCTOS</Link> <br />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact" component={Contact} />
        <Route path="/products/:id" component={Products} />
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
}

export default App;
