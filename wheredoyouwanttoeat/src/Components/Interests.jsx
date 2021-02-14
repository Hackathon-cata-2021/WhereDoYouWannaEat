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

    const [ isClicked, setIsClicked ] = useState({
        sandwich: false,
        asian: false,
        italian: false,
        mexican: false,
        fastfood: false,
        pizza: false,
        chicken: false,
        burgers: false,
        american: false,
        art: false,
        history: false,
        stem: false,
        beaches: false,
        parks: false,
        coffee: false,
        books: false,
        movies: false,
        music: false
    });

    const buttonOnClickRes = (buttonValue, e) => {
        function fetchData() {
            axiosCalls(`http://localhost:8080/search-results/${buttonValue}`)
                .then(response => filterRestaurants(restaurantData.concat(response.data.results)))
        }

        fetchData();

        const str = e.target.innerText.toLowerCase().replace(/\s/g, '');

        setIsClicked({ ...isClicked, [str]: true });
    }

    const filterRestaurants = (data) => {
        const x = findTopFive(data);
        setRestaurantData(x);
    }

    const buttonOnClickAct = async (buttonValue, e) => {
        function fetchData() {
            axiosCalls(`http://localhost:8080/search-results/${buttonValue}`)
                .then(response => filterActivities(response.data.results))
        }

        fetchData();

        const str = e.target.innerText.toLowerCase().replace(/\s/g, '');

        setIsClicked({ ...isClicked, [str]: true });
    }

    const filterActivities = (data) => {
        const x = findTop(data);
        setFilteredActivities(prevFilteredActivities => [...prevFilteredActivities, x]);
    }

    return (
        <div className="App">
            <div id="food">
                
                <h3>Food</h3>
                <InterestButton type="button" interestClass={!isClicked.sandwich ? "btnDefault" : "btnDefault.active"} buttonText="Sandwich" onClick={(e) => buttonOnClickRes('sandwich+shop', e)}/>
                <InterestButton type="button" interestClass={!isClicked.asian ? "btnDefault" : "btnDefault.active"} buttonText="Asian" onClick={(e) => buttonOnClickRes('asian+restaurant', e)}/>
                <InterestButton type="button" interestClass={!isClicked.italian ? "btnDefault" : "btnDefault.active"} buttonText="Italian" onClick={(e) => buttonOnClickRes('italian+restaurant', e)}/>
                <InterestButton type="button" interestClass={!isClicked.mexican ? "btnDefault" : "btnDefault.active"} buttonText="Mexican" onClick={(e) => buttonOnClickRes('mexican+restaurant', e)}/>
                <InterestButton type="button" interestClass={!isClicked.fastfood ? "btnDefault" : "btnDefault.active"} buttonText="Fast Food" onClick={(e) => buttonOnClickRes('fast+food+restaurant', e)}/>
                <InterestButton type="button" interestClass={!isClicked.pizza ? "btnDefault" : "btnDefault.active"} buttonText="Pizza" onClick={(e) => buttonOnClickRes('pizza+restaurant', e)}/>
                <InterestButton type="button" interestClass={!isClicked.chicken ? "btnDefault" : "btnDefault.active"} buttonText="Chicken" onClick={(e) => buttonOnClickRes('chicken+restaurant', e)}/>
                <InterestButton type="button" interestClass={!isClicked.burgers ? "btnDefault" : "btnDefault.active"} buttonText="Burgers" onClick={(e) => buttonOnClickRes('burger+restaurant', e)}/>
                <InterestButton type="button" interestClass={!isClicked.american ? "btnDefault" : "btnDefault.active"} buttonText="American" onClick={(e) => buttonOnClickRes('american+restaurant', e)}/>
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

                <InterestButton type="button" interestClass={!isClicked.art ? "btnDefault" : "btnDefault.active"} buttonText="Art" onClick={(e) => buttonOnClickAct('art+museum', e)}/>
                <InterestButton type="button" interestClass={!isClicked.history ? "btnDefault" : "btnDefault.active"} buttonText="History" onClick={(e) => buttonOnClickAct('history+museum', e)}/>
                <InterestButton type="button" interestClass={!isClicked.stem ? "btnDefault" : "btnDefault.active"} buttonText="STEM" onClick={(e) => buttonOnClickAct('science+museum', e)}/>
                <InterestButton type="button" interestClass={!isClicked.beaches ? "btnDefault" : "btnDefault.active"} buttonText="Beaches" onClick={(e) => buttonOnClickAct('beach', e)}/>
                <InterestButton type="button" interestClass={!isClicked.parks ? "btnDefault" : "btnDefault.active"} buttonText="Parks" onClick={(e) => buttonOnClickAct('park', e)}/>
                <InterestButton type="button" interestClass={!isClicked.coffee ? "btnDefault" : "btnDefault.active"} buttonText="Coffee" onClick={(e) => buttonOnClickAct('coffee+shop', e)}/>
                {/* will be changed to dropdowns */}
                <InterestButton type="button" interestClass={!isClicked.books ? "btnDefault" : "btnDefault.active"} buttonText="Books" onClick={(e) => buttonOnClickAct('book+store', e)}/>
                <InterestButton type="button" interestClass={!isClicked.movies ? "btnDefault" : "btnDefault.active"} buttonText="Movies" onClick={(e) => buttonOnClickAct('cinema', e)}/>
                <InterestButton type="button" interestClass={!isClicked.music ? "btnDefault" : "btnDefault.active"} buttonText="Music" onClick={(e) => buttonOnClickAct('music+venue', e)}/>
            </div>
            {/* <Button>Show Results</Button> */}
            <h2>For Activities</h2>
            <div className={styles.app}>
                {filteredActivities.length != 0 && filteredActivities.map((activity) => (
                    <CardComponent placeId={activity.place_id} cardHeading={activity.name}/>
                ))}
            </div>
            <h2>For Restaurants</h2>
            <div className={styles.app}>
            {restaurantData.length != 0 && restaurantData.map((restaurant) => (
                    <CardComponent placeId={restaurant.place_id} cardHeading={restaurant.name}/>
                ))}
            </div>
        </div>
    );
}

export default Interests;