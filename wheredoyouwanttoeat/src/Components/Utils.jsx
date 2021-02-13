export const getLocation = (getCoordinates) => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
        alert("Geolocation is not supported by this browser")
    }
}