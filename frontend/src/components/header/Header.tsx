import Logo from "./Logo"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <header className="w-full bg-[#f8f5ee] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between ">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}
