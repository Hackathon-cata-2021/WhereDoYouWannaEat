import './App.css';
import Homepage from './Components/Homepage';
import Interests from './Components/Interests';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/interests' render={() => <Interests />}/>
          <Route exact path="/" render={() => <Homepage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
