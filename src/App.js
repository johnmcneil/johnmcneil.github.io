import {  
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';


import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;