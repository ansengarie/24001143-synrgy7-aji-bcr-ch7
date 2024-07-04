import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/authProvider";
import { Link } from "react-router-dom";

interface NavbarProps {
  handleMenuButtonClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleMenuButtonClick }) => {
  const { auth, logoutUser } = useContext(AuthContext)!;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State untuk dropdown menu

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle state dropdown menu
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <nav className="flex items-center justify-between flex-shrink-0 h-16 px-2 shadow-md md:px-8">
      <button onClick={handleMenuButtonClick}>
        <i data-feather="menu"></i>
      </button>
      <div className="flex flex-row space-x-1 md:space-x-3">
        <div className="flex items-start space-x-1 space-y-2 md:space-x-3">
          <div className="rounded-full w-[38px] h-[38px] bg-[#CFD4ED]">
            <p className="py-2 text-xs font-bold text-center md:text-base">
              {auth?.name[0]}
            </p>
          </div>
          <p className="hidden font-bold text-center lg:flex">{auth?.name}</p>
          <button onClick={toggleDropdown}>
            <i data-feather="chevron-down"></i>
          </button>
          {isDropdownOpen && (
            <ul className="absolute bg-[#f1f3ff] right-8 top-10 w-30 rounded shadow-md z-50">
              <li className="mb-1 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <Link to={"/"} className="block px-5 py-2">
                  Landing Page
                </Link>
              </li>
              <li className="mb-1 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                <button className="block px-5 py-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
