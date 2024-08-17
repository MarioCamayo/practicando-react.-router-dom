import { Link } from "react-router-dom"
import AboutPages from "./AboutPages"


const userId = 'Mario'

const HomePages = () => {
  return (
    <>
      <h1>Home Pages</h1>
      <ul>
        <li>Visitas</li>
        <li>Consultas</li>
        <li>Comunicados</li>
      </ul>
      <Link to={AboutPages}/>
      <Link to={`/users/${userId}`}>users</Link>
    </>
  )
}

export default HomePages