import { axiosInstance } from '../helpers/axiosInstance'

export const AuthServices = {
  async login(values) {
    try {
      const { data } = await axiosInstance.post('/login', values)
      console.log('dasdsa', data)
      return data
    } catch (error) {
      console.error('Login failed:', error.response.data)
    }
  },

  async forgotPassword(values) {
    try {
      const { data } = await axiosInstance.post('/password-reset', values)

      return data
    } catch (error) {
      console.error(error.response.data)
    }
  },

  async newPassword(values) {
    try {
      const { data } = await axiosInstance.post('/password-set', values)

      return data
    } catch (error) {
      console.error(error.response.data)
    }
  },
}
