import axios from 'axios'

export const isDevelopment = process.env.NODE_ENV === 'development'

export const client = axios.create({
  baseURL: ''
})

//
export const clientMock = axios.create({
  baseURL: 'https://1855b68a-0eb3-433b-bbeb-b2719f5122e8.mock.pstmn.io'
})

export default client
