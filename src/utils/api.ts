import axios from "axios";


export const $api = axios.create({
  baseURL: 'http://2.26.23.72:5050/api/v1',
})
