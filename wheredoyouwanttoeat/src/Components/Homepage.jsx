import logo from '../logo.svg';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonSpot from './button/ButtonSpot';

function Homepage() {
  return (
    <div className="App">
        <ButtonSpot type="button" buttonText="Find Your Spot Today!" />
    </div>
  );
}

export default Homepage;