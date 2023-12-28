import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import { Route } from "react-router-dom/cjs/react-router-dom";
import ItemPage from "./pages/Item/Item";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="mt-20 md:mt-36">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/item/:itemSlug">
              <ItemPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
