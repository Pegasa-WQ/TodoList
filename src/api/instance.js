import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://academy2.smw.tom.ru/kerov-evgeny/api2',
  withCredentials: true,
  headers: {
    accept: 'application/json'
  }
})

export default instance
