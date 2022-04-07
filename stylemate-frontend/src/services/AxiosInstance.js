import axios from 'axios';

let token = localStorage.getItem('token');

const API = axios.create({
    baseURL: "https://elsa.beta.mediance.co.kr/stylemates",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    },
});

const UAPI = axios.create({
    baseURL: "https://elsa.beta.mediance.co.kr/stylemates",
});

export {
    API,
    UAPI
}