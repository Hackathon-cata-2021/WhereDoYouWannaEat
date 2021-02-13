// import './Homepage.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import axiosCalls from './Utils';

function buttonOnClick(buttonValue){
    let url = "https://maps.googleapis.com/maps/api/place/textsearch/json?input="+buttonValue+"&inputtype=textquery&fields=name,rating,opening_hours,place_id&radius=4000&key=AIzaSyCJoZQo8YwkU6LNHDWwMcPwd9DY5Kl4Neo";
    const fetchData = async () =>{
        await axiosCalls(url)
        .then((res) => (setData(res.data.results)));
}

function Homepage() {
    return (
        <div className="App">
            <div id="food">
                <Button onClick={()=> buttonOnClick('sandwich+shop')}>Sandwich</Button>
                <Button onClick={()=> buttonOnClick('asian+restaurant')}>Asian</Button>
                <Button onClick={()=> buttonOnClick('italian+restaurant')}>Italian</Button>
                <Button onClick={()=> buttonOnClick('mexican+restaurant')}>Mexican</Button>
                <Button onClick={()=> buttonOnClick('fast+food+restaurant')}>Fast Food</Button>
                <Button onClick={()=> buttonOnClick('pizza+restaurant')}>Pizza</Button>
                <Button onClick={()=> buttonOnClick('chicken+restaurant')}>Chicken</Button>
                <Button onClick={()=> buttonOnClick('burger+restaurant')}>Burgers</Button>
                <Button onClick={()=> buttonOnClick('american+restaurant')}>American</Button>
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
                <Button onClick={()=> buttonOnClick('art+museum')}>Art</Button>
                <Button onClick={()=> buttonOnClick('history+museum')}>History</Button>
                <Button onClick={()=> buttonOnClick('science+museum')}>STEM</Button>
                <Button onClick={()=> buttonOnClick('beach')}>Beaches</Button>
                <Button onClick={()=> buttonOnClick('park')}>Parks</Button>
                <Button onClick={()=> buttonOnClick('coffee+shop')}>Coffee</Button>
                {/* will be changed to dropdowns */}
                <Button onClick={()=> buttonOnClick('book+store')}>Books</Button>
                <Button onClick={()=> buttonOnClick('movie+theater')}>Movies</Button>
                <Button onClick={()=> buttonOnClick('music+venue')}>Music</Button>
            </div>

        </div>
    );
}

export default Homepage;