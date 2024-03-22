export const expireToken = async (token) => {
  const decodeToken = jwt_decode(token)
  try {
    if (
      moment().isSameOrAfter(
        moment.unix(decodeToken?.exp).subtract('minutes', 5)
      )
    ) {
      const form = {
        refresh_token: localStorage.getItem('refresh_token'),
      }
      await AuthService.refreshToken(form)
    }
  } catch (e) {
    console.log(e)
    throw e
  }
}
