import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import InterestButton from './interest-button/InterestButton'
import { MainContext } from './context/MainContext';
import { axiosCalls, findTop, findTopFive } from './Utils';
import CardComponent from './card-component/CardComponent'
import styles from './Interests.module.css';

function Interests() {

    const [ restaurantData, setRestaurantData ] = useState([]);

    const [ filteredActivities, setFilteredActivities ] = useState([]);

    const buttonOnClickRes = (buttonValue) => {
        function fetchData() {
            axiosCalls(`http://localhost:8080/search-results/${buttonValue}`)
                .then(response => filterRestaurants(restaurantData.concat(response.data.results)))
        }

        fetchData();
        filterRestaurants();
    }

    const filterRestaurants = (data) => {
        const x = findTopFive(data);
        setRestaurantData(x);
    }

    const buttonOnClickAct = async (buttonValue) => {
        function fetchData() {
            axiosCalls(`http://localhost:8080/search-results/${buttonValue}`)
                .then(response => filterActivities(response.data.results))
        }

        fetchData();
    }

    const filterActivities = (data) => {
        const x = findTop(data);
        setFilteredActivities(prevFilteredActivities => [...prevFilteredActivities, x]);
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
                <InterestButton type="button" interestClass="btnDefault" buttonText="Movies" onClick={() => buttonOnClickAct('cinema')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Music" onClick={() => buttonOnClickAct('music+venue')}/>
            </div>
            {/* <Button>Show Results</Button> */}
            <div className={styles.app}>
                {filteredActivities.length != 0 && filteredActivities.map((activity) => (
                    <CardComponent cardHeading={activity.name}/>
                ))}
            </div>
            <div>
            {restaurantData.length != 0 && restaurantData.map((restaurant) => (
                    <CardComponent cardHeading={restaurant.name}/>
                ))}
            </div>
        </div>
    );
}

export default Interests;