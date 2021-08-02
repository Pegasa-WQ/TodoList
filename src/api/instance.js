import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://academy2.smw.tom.ru/kerov-evgeny/api2',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${9}`
  }
})

export default instance
