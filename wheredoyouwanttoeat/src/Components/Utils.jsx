import axios from 'axios';

export const getLocation = (getCoordinates) => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
        alert("Geolocation is not supported by this browser")
    }
}

export const axiosCalls = (path) => {
    return axios({
        method: 'get',
        url: path
    });
}