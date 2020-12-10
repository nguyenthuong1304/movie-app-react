import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { MainContainer } from "./containers/MainContainer";
import MovieDetail from "./containers/Movie";
// import { createBrowserHistory } from "history";
//
// const customHistory = createBrowserHistory();

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={MainContainer} />
          <Route path="/movie/:id" exact component={MovieDetail} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
