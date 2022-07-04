import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditPage from "./pages/EditPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/success" exact component={() => <h2>success</h2>} />
          <Route path="/failure" exact component={() => <h2>failure</h2>} />
          <Route path="/edit" exact component={EditPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
