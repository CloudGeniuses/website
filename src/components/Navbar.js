import React, { useState } from 'react'
import { Link, useLocation, useNavigate  } from 'react-router-dom'
import { scroller  } from 'react-scroll'
import useScrollToSection from '../hooks/useScrollToSection'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation();
  const [scrollTo, setScrollTo] = useState({contact: false, services: false});
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: 'services' },
    { name: 'Training Programs', href: '/training' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: 'contact' },
  ]
  const handleClick = (section) => {
    console.log(location.pathname, section)
    if (location.pathname === "/") {
      // If already on the home page, scroll to the "contact" section
      scroller.scrollTo(section, { smooth: true, duration: 500 });
    } else {
        setScrollTo(prev => ({ ...prev, [section]: true }));
        navigate("/");
    }
  };

  useScrollToSection("contact", scrollTo.contact);
  useScrollToSection("services", scrollTo.services);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="text-2xl font-bold text-blue-600">CloudGenius</Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button variant="ghost" onClick={() => setIsMenuOpen(true)}>
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
                item.href.startsWith('/') ?
                <Link key={item.name} to={item.href} className="text-base font-medium text-gray-500 hover:text-gray-900">
                    {item.name}
                </Link>
              :   <button key={item.name} onClick={() =>handleClick(item.href)} className="text-base font-medium text-gray-500 hover:text-gray-900">{item.name}</button>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">CloudGenius</span>
                </div>
                <div className="-mr-2">
                  <button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <button className="ml-3 text-base font-medium text-gray-900">{item.name}</button>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}