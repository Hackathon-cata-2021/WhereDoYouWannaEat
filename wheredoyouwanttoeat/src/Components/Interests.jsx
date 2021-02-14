import React, { useState, useContext } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import InterestButton from './interest-button/InterestButton'
import { MainContext } from './context/MainContext';
import { axiosCalls } from './Utils';

function Interests() {
    const buttonOnClickRes = (buttonValue) => {
        const fetchData = async () => {
            axiosCalls(`http://localhost:8080/search-results/${buttonValue}`)
                .then(response => console.log(response));
        }
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

                <InterestButton type="button" interestClass="btnDefault" buttonText="Art" onClick={() => buttonOnClickRes('art+museum')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="History" onClick={() => buttonOnClickRes('history+museum')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="STEM" onClick={() => buttonOnClickRes('science+museum')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Beaches" onClick={() => buttonOnClickRes('beach')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Parks" onClick={() => buttonOnClickRes('park')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Coffee" onClick={() => buttonOnClickRes('coffee+shop')}/>
                {/* will be changed to dropdowns */}
                <InterestButton type="button" interestClass="btnDefault" buttonText="Books" onClick={() => buttonOnClickRes('book+store')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Movies" onClick={() => buttonOnClickRes('movie+theater')}/>
                <InterestButton type="button" interestClass="btnDefault" buttonText="Music" onClick={() => buttonOnClickRes('music+venue')}/>
            </div>

        </div>
    );
}

export default Interests;