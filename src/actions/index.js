import axios from 'axios';

const API_KEY = '9d956af90f4277db47ed062e05462347';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    let url = `${ROOT_URL}&q=${city},gb`;
    let request = axios.get(url);

    console.log('request', request);

    return {
       type: FETCH_WEATHER,
       payload: request
    };
}