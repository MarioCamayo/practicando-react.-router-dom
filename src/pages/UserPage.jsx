import { useParams } from "react-router-dom"

const UserPage = () => {
  const {id} = useParams()
  console.log(id);
  return (
    <div>UserPage <h1>{id}</h1></div>
  )
}

export default UserPage