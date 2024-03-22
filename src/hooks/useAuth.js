import { useDispatch } from 'react-redux'
import { setUser } from '../actions/userActions'
import { toast } from 'react-toastify'
import { AuthServices } from '../services/auth.service'

export const useAuth = () => {
  const dispatch = useDispatch()

  const handleLogin = async (values) => {
    try {
      const response = await AuthServices.login(values)
      const { access_token, refresh_token } = response
      dispatch(setUser(response))

      localStorage.setItem('access_token', access_token)
      localStorage.setItem('refresh_token', refresh_token)

      console.log('Login successful', response)
    } catch (error) {
      console.error('Login failed:', error.response.data)
      toast.error('Login failed. Please check your credentials and try again.')
    }
  }

  const handleForgotPassword = async (values) => {
    try {
      const response = await AuthServices.forgotPassword(values)
      console.log(response)
    } catch (error) {
      console.log(error.response)
      toast.error(
        `Password reset request failed: ${error.response.data.detail}`
      )
    }
  }

  const handleNewPassword = async (values) => {
    try {
      const response = await AuthServices.newPassword(values)
      console.log(response)
    } catch (error) {
      toast.error(`Password reset failed: ${error.response.data}`)
    }
  }

  return { handleLogin, handleForgotPassword, handleNewPassword }
}
