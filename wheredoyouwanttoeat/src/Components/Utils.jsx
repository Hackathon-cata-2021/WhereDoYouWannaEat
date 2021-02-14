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

export const findTopFive = (data, setData) => {
    const result = data.sort(function (a, b) {
        return a.rating - b.rating;
    });

    setData(result.slice(result.length-4, result.length-1));
}

export const findTop = (data, setData) => {
    const result = data.sort(function (a, b) {
        return a.rating - b.rating;
    });

    return result[result.length-1];
}