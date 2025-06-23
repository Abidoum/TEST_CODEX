import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="fixed top-0 inset-x-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 z-50">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-xl font-semibold">NewsPortal</div>
        <button
          className="sm:hidden p-2 rounded-md focus:outline-none focus:ring"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <ul className="hidden sm:flex space-x-6">
          <li><a href="#latest" className="hover:text-blue-600">Latest</a></li>
          <li><a href="#popular" className="hover:text-blue-600">Popular</a></li>
          <li><a href="#editors" className="hover:text-blue-600">Editor's Picks</a></li>
        </ul>
      </nav>
      {menuOpen && (
        <ul className="sm:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-4 pb-4 space-y-2">
          <li><a href="#latest" className="block py-2" onClick={toggleMenu}>Latest</a></li>
          <li><a href="#popular" className="block py-2" onClick={toggleMenu}>Popular</a></li>
          <li><a href="#editors" className="block py-2" onClick={toggleMenu}>Editor's Picks</a></li>
        </ul>
      )}
    </header>
  )
}
