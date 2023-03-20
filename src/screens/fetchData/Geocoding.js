const getAddress = async (lat, lng) => {
    return await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&appid=dbec793965f28106d4907c3adb3c9de6`)
    .then((response) => response.json());
}

const getCoordinates = async (cityName, stateCode, countryCode) => {
    return await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&appid=dbec793965f28106d4907c3adb3c9de6`)
    .then((response) => response.json());
}

module.exports = {getAddress, getCoordinates} 