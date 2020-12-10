import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { MainContainer } from "./containers/MainContainer";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import { createBrowserHistory } from "history";
//
// const customHistory = createBrowserHistory();

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={MainContainer} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
