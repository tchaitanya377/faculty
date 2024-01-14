import React, { useState } from 'react';
import { FiHome, FiCalendar, FiBook, FiClipboard, FiUser, FiCheck, FiX, FiMenu } from 'react-icons/fi';
import logo from '../images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isCurrentPage = (pathname) => {
    return location.pathname === pathname;
  };

  const getLinkStyle = (pathname) => {
    const isActive = isCurrentPage(pathname);
    return `text-blue-700 flex flex-col items-center space-y-1 text-xl px-5 ${isActive ? 'border-b-2 border-blue-700' : ''}`;
    
  };

  return (
    <nav className="bg-white p-4 flex justify-between items-center relative z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-25 mx-5" />
        <h1 className="text-red-600 text-5xl font-bold">MITS</h1>
      </div>
      <div className="md:hidden">
        {isMenuOpen ? (
          <div className="fixed top-0 left-0 h-screen w-screen bg-white p-4">
            <FiX
              className="text-blue-700 text-2xl cursor-pointer absolute top-4 right-4"
              onClick={toggleMenu}
            />
            <ul className="text-blue-700 space-y-4 text-center text-xl">
              <li className={getLinkStyle('/home')}><Link to="/home">Home</Link></li>
              <li className={getLinkStyle('/events')}><Link to="/events">Events</Link></li>
              <li className={getLinkStyle('/research')}><Link to="/research">Research</Link></li>
              <li className={getLinkStyle('/meetings')}><Link to="/meetings">Meetings</Link></li>
              <li className={getLinkStyle('/attendance')}><Link to="/attendance">Attendance</Link></li>
              <li className={getLinkStyle('/courses')}><Link to="/courses">Courses</Link></li>
              <li className={getLinkStyle('/profile')}><Link to="/profile">Profile</Link></li>
            </ul>
          </div>
        ) : null}
        <FiMenu
          className="text-blue-700 text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      <div className="hidden md:flex items-center space-x-4 flex-grow justify-center text-xl">
        <Link to="/home" className={getLinkStyle('/home')}>
          <FiHome />
          Home
        </Link>
        <Link to="/events" className={getLinkStyle('/events')}>
          <FiCalendar />
          Events
        </Link>
        <Link to="/research" className={getLinkStyle('/research')}>
          <FiBook />
          Research
        </Link>
        <Link to="/meetings" className={getLinkStyle('/meetings')}>
          <FiCalendar />
          Meetings
        </Link>
        <Link to="/attendance" className={getLinkStyle('/attendance')}>
          <FiClipboard />
          Attendance
        </Link>
        <Link to="/courses" className={getLinkStyle('/courses')}>
          <FiBook />
          Courses
        </Link>
        <Link to="/profile" className={getLinkStyle('/profile')}>
          <FiUser />
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;