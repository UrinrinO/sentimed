import { Activity } from 'lucide-react'
import logo from '../../assets/logo.png'

const navLinks = ['Home', 'About', 'Platform', 'Pricing']

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex items-center gap-2">
        <img src={logo} alt="SentiMed" className="w-20 h-20 object-contain mix-blend-multiply" />
        <span className="text-2xl font-bold text-muted/90 tracking-tight">SentiMed</span>
      </div>

      <ul className="flex items-center gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-gray-500 hover:text-navy transition-colors no-underline">
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <button className="text-sm font-semibold text-navy bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity">
          Sign Up
        </button>
        <button className="flex items-center gap-2 text-sm font-semibold bg-navy text-white px-6 py-2.5 rounded-full border-none cursor-pointer hover:opacity-90 transition-opacity">
          <Activity size={14} />
          Login
        </button>
      </div>
    </nav>
  )
}
