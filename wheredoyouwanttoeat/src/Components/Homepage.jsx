import React, { useState, useEffect, useContext } from 'react';
import { getLocation } from '../Components/Utils';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonSpot from './button/ButtonSpot';
import InterestButton from './interest-button/InterestButton';
import { MainContext } from '../Components/context/MainContext';
import CarouselComponent from './HomepageComponents/CarouselComponent';

function Homepage() {
  const {latitude, setLatitude, longitude, setLongitude} = useContext(MainContext);

  useEffect(() => {
    getLocation(getCoordinates);

    function getCoordinates(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

  }, [getLocation])

  return (
    <div className="App">
      <CarouselComponent/>
    </div>
  );
}

export default Homepage;