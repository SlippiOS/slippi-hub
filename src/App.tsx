import { Router, Route } from "@solidjs/router";
import "./App.css";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import { checkSetup } from "./utils/setupUtils";

function App() {
  console.log("app loaded");
  return (
    <Router>
      <Route path="/" preload={checkSetup} />
      <Route path="/setup" component={() => <Setup />} />
      <Route path="/home" component={() => <Home />} />
    </Router>
  );
}

export default App;
