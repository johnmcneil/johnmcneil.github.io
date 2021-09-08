import {  
  HashRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import WritingPage from './pages/WritingPage';
import GhgPage from './pages/GhgPage';
import NotFoundPage from './pages/NotFoundPage';


import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/writing" component={WritingPage} />
          <Route path="/ghg" component={GhgPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;