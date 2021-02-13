import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Homepage />} />
        </Switch>
      </Router>
     <Homepage/>
    </div>
  );
}

export default App;
