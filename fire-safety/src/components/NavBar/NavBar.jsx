//npm modules
import { Link } from 'react-router-dom'

// assets
import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return (
    <header>
      <img className="logo" src={ reactLogo } alt="The React logo" />
      <nav>
        <Link to="/about">What We Do</Link>
        {/* <Link to="/">Scary Monsters</Link> */}
        {/* <Link to="/spells">Search for Spells</Link> */}
      </nav>
    </header>
  )
}

export default NavBar