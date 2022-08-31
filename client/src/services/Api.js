import axios from 'axios' //https://axios-http.com/docs/intro

export default () => {
    return axios.create({
        baseURL: `http://localhost:8081/`
    })
}
