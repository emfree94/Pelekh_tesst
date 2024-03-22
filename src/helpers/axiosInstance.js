import axios from 'axios'
import { getToken } from './getToken'

export const axiosInstance = axios.create({
  baseURL: 'https://auth-qa.qencode.com/v1/auth',
})

axiosInstance.interceptors.request.use(
  async (config) => {
    config.headers = config.headers ?? {}

    if (localStorage.getItem("refresh_token")) {
      await expireToken(getToken())
    }

    config.headers["Authorization"] = getToken() ? `Bearer ${getToken()}` : ""

    return config
  },
  (error) => Promise.reject(error)
)
