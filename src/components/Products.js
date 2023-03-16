import { Link,Outlet } from 'react-router-dom'
export default function Products() {
  return (
    <div className="center">
        <div>
            <input type="search" placeholder="Search Products" />
        </div>
        <nav className='secondary-nav'>
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
