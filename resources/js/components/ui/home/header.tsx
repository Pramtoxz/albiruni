import React from "react"
import { Link } from "@inertiajs/react"
import { Telescope, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="relative z-20 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="bg-blue-600 rounded-full p-3 relative overflow-hidden border-2 border-blue-400">
              <Telescope className="text-yellow-300 w-8 h-8 relative z-10" />
              <div className="absolute inset-0 bg-blue-500 opacity-50 animate-pulse"></div>
            </div>
            <div className="absolute -top-1 -right-1">
              <Star className="text-yellow-300 w-4 h-4 animate-twinkle" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              <span className="text-blue-300">A</span>
              <span className="text-white">lbiruni</span>
            </h1>
            <p className="text-xs text-blue-200">PRESCHOOL & DAY CARE</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#activities">Kegiatan</NavLink>
          <NavLink href="#facilities">Fasilitas</NavLink>
          <NavLink href="#teachers">Guru</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>

        <Button className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold">
          Enroll Now
        </Button>
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link href={href} className="text-blue-200 hover:text-yellow-300 transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
    </Link>
  )
} 