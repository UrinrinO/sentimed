import { Outlet } from 'react-router-dom'
import Navbar from '../navigation/Navbar'

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}
