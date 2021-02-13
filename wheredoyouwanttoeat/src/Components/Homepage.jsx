import React, { useState, useEffect, useContext } from 'react';
import { getLocation } from '../Components/Utils';
import './Homepage.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MainContext } from '../Components/context/MainContext';

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
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
}

export default Homepage;