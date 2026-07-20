 
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
  <>
    <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* nested url  */}
        <Link to="/about/detail">About</Link>

  
  </>
  )
}

export default Menu