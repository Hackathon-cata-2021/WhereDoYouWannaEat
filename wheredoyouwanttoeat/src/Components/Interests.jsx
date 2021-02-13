// import './Homepage.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { axiosCalls, findTop, findTopFive } from './Utils';
import InterestButton from './interest-button/InterestButton'

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
                <InterestButton type="button" interestClass="btnDefault" buttonText="Sandwich" onClick={() => buttonOnClickRes('sandwich+shop')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Asian" onClick={() => buttonOnClickRes('asian+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Italian" onClick={() => buttonOnClickRes('italian+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Mexican" onClick={() => buttonOnClickRes('mexican+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Fast Food" onClick={() => buttonOnClickRes('fast+food+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Pizza" onClick={() => buttonOnClickRes('pizza+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Chicken" onClick={() => buttonOnClickRes('chicken+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Burgers" onClick={() => buttonOnClickRes('burger+restaurant')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="American" onClick={() => buttonOnClickRes('american+restaurant')}/>
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

                <InterestButton type="button" interestClass="btnDefault" buttonText="Art" onClick={() => buttonOnClickAct('art+museum')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="History" onClick={() => buttonOnClickAct('history+museum')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="STEM" onClick={() => buttonOnClickAct('science+museum')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Beaches" onClick={() => buttonOnClickAct('beach')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Parks" onClick={() => buttonOnClickAct('park')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Coffee" onClick={() => buttonOnClickAct('coffee+shop')}/>
                {/* will be changed to dropdowns */}
                <InterestButton type="button" interestClass="btnDefault" buttonText="Books" onClick={() => buttonOnClickAct('book+store')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Movies" onClick={() => buttonOnClickAct('movie+theater')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Music" onClick={() => buttonOnClickAct('music+venue')}/>
            </div>

        </div>
    );
}

export default Interests;