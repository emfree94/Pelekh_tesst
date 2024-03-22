import { useSelector } from 'react-redux'
import logoIcon from '../assets/icons/logo.svg'
import { Link } from 'react-router-dom'

export const Logo = ({ marginTop }) => {
  const userData = useSelector((state) => state.user)
  console.log(userData)

  return (
    <Link to="/">
      <img className={marginTop} src={logoIcon} alt="logo" />
    </Link>
  )
}
