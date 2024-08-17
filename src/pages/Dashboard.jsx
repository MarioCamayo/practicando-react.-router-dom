import { useNavigate, Outlet, Link } from "react-router-dom"

const Dashboard = () => {
  const navigate =  useNavigate()

  const handleClick = ()=>{
    navigate("/")

  }
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet/>
      {/* <p onClick={handleClick}>Logout</p> */}
      <button onClick={handleClick}>Logout</button>

      <Link to='welcome'>WELCOME MARIO</Link>
      


    </>
  )
}

export default Dashboard