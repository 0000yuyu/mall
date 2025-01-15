import axios from "axios"

const instance = axios.create({
    baseURL : "/api",
    headers: {
        'X-Naver-Client-Id': 'VaFsT2Ebw3VTqGVtV7xc',
        'X-Naver-Client-Secret': 'IEUYnElThe',
    }
});


export default instance