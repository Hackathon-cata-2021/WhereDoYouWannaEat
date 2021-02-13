// import './Homepage.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { axiosCalls, findTop, findTopFive } from './Utils';

function Interests() {

    const { restaurantData, setRestaurantData } = useState([]);
    const { activityData, setActivityData } = useState([]);
    const { top, setTop } = useState([]);

    function buttonOnClickRes(buttonValue) {
        let url = "https://maps.googleapis.com/maps/api/place/textsearch/json?input="+buttonValue+"&inputtype=textquery&fields=name,rating,opening_hours,place_id&radius=1&key=AIzaSyCJoZQo8YwkU6LNHDWwMcPwd9DY5Kl4Neo";
        const fetchData = async () => {
            await axiosCalls(url)
                .then((res) => setRestaurantData((prevRestaurantData) => prevRestaurantData.concat(res.data.results)));
        }

        fetchData();
        filterDataRes();
    }

    function buttonOnClickAct(buttonValue) {
        let url = "https://maps.googleapis.com/maps/api/place/textsearch/json?input="+buttonValue+"&inputtype=textquery&fields=name,rating,opening_hours,place_id&radius=1&key=AIzaSyCJoZQo8YwkU6LNHDWwMcPwd9DY5Kl4Neo";
        const fetchData = async () => {
            await axiosCalls(url)
                .then((res) => setActivityData(res.data.results));
        }

        fetchData();
        findHighest();
    }

    function findHighest() {
        setTop((prevTop) => prevTop.push(findTop(activityData, setTop)));
    }

    function filterDataRes() {
        findTopFive(restaurantData, setRestaurantData);
    }

    return (
        <div className="App">
            <div id="food">
                <Button onClick={()=> buttonOnClickRes('sandwich+shop')}>Sandwich</Button>
                <Button onClick={()=> buttonOnClickRes('asian+restaurant')}>Asian</Button>
                <Button onClick={()=> buttonOnClickRes('italian+restaurant')}>Italian</Button>
                <Button onClick={()=> buttonOnClickRes('mexican+restaurant')}>Mexican</Button>
                <Button onClick={()=> buttonOnClickRes('fast+food+restaurant')}>Fast Food</Button>
                <Button onClick={()=> buttonOnClickRes('pizza+restaurant')}>Pizza</Button>
                <Button onClick={()=> buttonOnClickRes('chicken+restaurant')}>Chicken</Button>
                <Button onClick={()=> buttonOnClickRes('burger+restaurant')}>Burgers</Button>
                <Button onClick={()=> buttonOnClickRes('american+restaurant')}>American</Button>
            </div>
            <br />
            {/* <div id='books'>
                <InterestButton type="button" buttonText="" >Sandwich</InterestButton>
            </div> */}

            {/* <div id='movies'>
                <InterestButton type="button" buttonText="" >Sandwich</InterestButton>
            </div> */}

            {/* <div id='music'>
                <InterestButton type="button" buttonText="" >add music here</InterestButton>
            </div> */}

            <div id='other'>
                <Button onClick={()=> buttonOnClickAct('art+museum')}>Art</Button>
                <Button onClick={()=> buttonOnClickAct('history+museum')}>History</Button>
                <Button onClick={()=> buttonOnClickAct('science+museum')}>STEM</Button>
                <Button onClick={()=> buttonOnClickAct('beach')}>Beaches</Button>
                <Button onClick={()=> buttonOnClickAct('park')}>Parks</Button>
                <Button onClick={()=> buttonOnClickAct('coffee+shop')}>Coffee</Button>
                {/* will be changed to dropdowns */}
                <Button onClick={()=> buttonOnClickAct('book+store')}>Books</Button>
                <Button onClick={()=> buttonOnClickAct('movie+theater')}>Movies</Button>
                <Button onClick={()=> buttonOnClickAct('music+venue')}>Music</Button>
            </div>

        </div>
    );
}

export default Interests;