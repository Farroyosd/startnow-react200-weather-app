import axios from "axios";

export function getWeather(city) {

    return {
        type: 'GET_WEATHER',
        payload:
        axios
            .get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=d89a5ae23d2893c5ececda2b63da2ff4')
            .then(response => {
                
                const cityData = {
                    name: response.data.name,
                    lat: response.data.coord.lat,
                    lon: response.data.coord.lon,
                    pressure: response.data.main.pressure,
                    temp: response.data.main.temp,
                    max: response.data.main.temp_max,
                    min: response.data.main.temp_min,
                    humidity: response.data.main.humidity,
                    wind: response.data.wind.speed,
                    icon: "https://openweathermap.org/img/w/" + response.data.weather[0].icon +".png",
                    error: false
                }
                return cityData;
            })
            .catch(error => {
                const cityData = {
                     error: true
                }

                return cityData
            })

    }
}
export function updateSearchHistory(city, date, time) {

    return {
        type: 'UPDATE_SEARCH_HISTORY',
        payload: {
            city: city,
            date: date,
            time: time
        }

    }
}
