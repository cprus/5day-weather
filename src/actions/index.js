import axios from 'axios';

const API_KEYS = 'ac356eda5364f906324f242d25fba3e0';
const API_KEY = 'AIzaSyBrbFFvg_RvWor_QtWfeBTtzQ-FCK2lLFg';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
};