import {  
  HashRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SentinelSP5Page from './pages/SentinelSP5Page';
import ClimateTracePage from './pages/ClimateTracePage';
import NotFoundPage from './pages/NotFoundPage';


import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/sentinelsp5" component={SentinelSP5Page} />
          <Route path="/climatetrace" component={ClimateTracePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;