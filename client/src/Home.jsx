import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 px-4 relative">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-white bg-opacity-90 shadow-lg fixed top-0 left-0 z-30">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-indigo-700 mb-1 transform transition ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-indigo-700 mb-1 transition ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-indigo-700 transition ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {/* Logo */}
        <div className="text-2xl font-extrabold text-indigo-700 tracking-wide">
          Ranjith
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 text-gray-800 font-medium">
            <li><Link to="/" className="hover:text-indigo-600 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-indigo-600 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link></li>
            <li><Link to="/dashboard" className="hover:text-indigo-600 transition">Dashboard</Link></li>
          </ul>
          <Link to="/login" className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Logout
          </Link>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-40 shadow-lg transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} duration-300 ease-in-out`}>
        <div className="p-6 space-y-6">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-lg text-indigo-700 hover:text-indigo-500 block">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="text-lg text-indigo-700 hover:text-indigo-500 block">About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-lg text-indigo-700 hover:text-indigo-500 block">Contact</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="text-lg text-indigo-700 hover:text-indigo-500 block">Dashboard</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="w-full bg-red-500 text-white px-4 py-2 text-center rounded hover:bg-red-600 transition block">Logout</Link>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center pt-32 pb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Welcome to the Employee Portal
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Seamlessly manage your employee records and company resources in one place.
        </p>

      </div>
    </div>
  );
};

export default Home;
