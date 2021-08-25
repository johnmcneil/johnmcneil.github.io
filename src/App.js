import {  
  HashRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import WritingPage from './pages/WritingPage';
import NotFoundPage from './pages/NotFoundPage';


import './App.css';


function App() {
  return (
    <Router basename={`/${process.env.PUBLIC_URL}`}>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/writing" component={WritingPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;