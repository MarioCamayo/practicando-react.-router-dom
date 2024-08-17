import { NavLink } from "react-router-dom"
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink 
          className={({isActive})=> (isActive ? 'active' :'')}
          to="./" >Ir a Home</NavLink>
          </li>
        <li>
          <NavLink 
          className={({isActive})=>(isActive ? 'blue' : '')}
          to="./about">Ir a About</NavLink>
        </li>
        <li>
          <NavLink to="./users">Ir a Users</NavLink>
        </li>
        <li>
          <NavLink to="./dashboard">Ir a dashboard</NavLink>
        </li>
      </ul> 
    </>
  )
}

export default Navbar