import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Description from "./components/Description";
import NotFound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="App ">
        <div>
          <Switch>
            <Route exact path="/" component={MovieList}></Route>
            <Route path="/description/:id" component={Description} />
            <Route exact path="/:id" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
