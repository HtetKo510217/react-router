import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='center'>
      <div>Home</div>
      {/* replace : true => change browser history style*/}
      <button className='btn' onClick={()=> navigate('order-summary',{replace:true})}>Place Order</button>

    </div>
  )
}
