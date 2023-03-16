import { useParams } from "react-router-dom" 
export default function UserDetails() {
  const { userId } = useParams()
  return (
    <div>Details about User {userId}</div>
  )
}
