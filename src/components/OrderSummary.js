import { useNavigate } from 'react-router-dom'
export default function OrderSummary() {
  const navigate = useNavigate()
  return (
    <div className="center">
        <div>Order confimed !!!</div>
        <button className="btn" onClick={()=> navigate(-1)}>Go Back</button>
    </div>
  )
}
