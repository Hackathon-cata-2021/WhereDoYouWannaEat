// import './Homepage.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function Interests() {
    return (
        <div className="App">
            <div id="food">
                <Button>Sandwich</Button>
                <Button>Salad</Button>
                <Button>Asian</Button>
                <Button>Italian</Button>
                <Button>Mexican</Button>
                <Button>Fast Food</Button>
                <Button>Pizza</Button>
                <Button>Chicken</Button>
                <Button>Burgers</Button>
                <Button>American</Button>
            </div>

            {/* <div id='books'>
                <Button>Sandwich</Button>
            </div> */}

            {/* <div id='movies'>
                <Button>Sandwich</Button>
            </div> */}

            {/* <div id='music'>
                <Button>add music here</Button>
            </div> */}

            <div id='other'>
                <Button>Art</Button>
                <Button>Phylosophy</Button>
                <Button>History</Button>
                <Button>STEM</Button>
                <Button>Beaches</Button>
                <Button>Parks</Button>
                <Button>Coffee</Button>
                {/* will be changed to dropdowns */}
                <Button>Books</Button>
                <Button>Movies</Button>
                <Button>Music</Button>
            </div>

        </div>
    );
}

export default Interests;