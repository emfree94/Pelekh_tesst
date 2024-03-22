import moment from "moment"
import { AuthServices } from "../services/auth.service"
import { jwtDecode } from "jwt-decode"

export const expireToken = async (token) => {
  const decodeToken = jwtDecode(token)
  try {
    if (
      moment().isSameOrAfter(
        moment.unix(decodeToken?.exp).subtract('minutes', 5)
      )
    ) {
      const form = {
        refresh_token: localStorage.getItem('refresh_token'),
      }
      await AuthServices.refreshToken(form)
    }
  } catch (e) {
    console.log(e)
    throw e
  }
}
