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
                <h3>Food</h3>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Sandwich" onClick={() => buttonOnClick('sandwich+shop')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Asian" onClick={() => buttonOnClick('asian+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Italian" onClick={() => buttonOnClick('italian+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Mexican" onClick={() => buttonOnClick('mexican+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Fast Food" onClick={() => buttonOnClick('fast+food+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Pizza" onClick={() => buttonOnClick('pizza+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Chicken" onClick={() => buttonOnClick('chicken+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Burgers" onClick={() => buttonOnClick('burger+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="American" onClick={() => buttonOnClick('american+restaurant')}/>
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
                <h3>Other Stuffs</h3>

                <InterestButton type="button" interestClass="btnDefault" buttonText="Art" onClick={() => buttonOnClick('art+museum')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="History" onClick={() => buttonOnClick('history+museum')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="STEM" onClick={() => buttonOnClick('science+museum')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Beaches" onClick={() => buttonOnClick('beach')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Parks" onClick={() => buttonOnClick('park')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Coffee" onClick={() => buttonOnClick('coffee+shop')}/>
                {/* will be changed to dropdowns */}
                <InterestButton type="button" interestClass="btnDefault" buttonText="Books" onClick={() => buttonOnClick('book+store')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Movies" onClick={() => buttonOnClick('movie+theater')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Music" onClick={() => buttonOnClick('music+venue')}/>
            </div>

        </div>
    );
}

export default Interests;