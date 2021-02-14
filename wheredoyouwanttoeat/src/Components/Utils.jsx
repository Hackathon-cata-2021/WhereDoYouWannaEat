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

export const findTopFive = (data) => {
    const result = data.sort(function (a, b) {
        return a.rating - b.rating;
    });

    const x = result.slice(result.length-6, result.length-1);

    return x;
}

export const findTop = (data) => {
    const result = data.sort(function (a, b) {
        return a.rating - b.rating;
    });
    console.log(result[result.length-1])
    return result[result.length-1];
}