import axios from 'axios'

const instance : any = axios.create({
    baseURL: "http://localhost:3030"
})

export default instance