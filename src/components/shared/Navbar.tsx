import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="section-container flex flex-wrap sm:justify-start sm:flex-nowrap w-full  text-sm py-4">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex-none text-xl font-semibold">
              <MdConnectWithoutContact className="text-2xl ml-2" />
              Contactify
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <IoMdMenu className="text-xl" />
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className={`hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              <Link to="/add-contact" className="btn " aria-current="page">
                Add Contacts
              </Link>
              <Link to="/all-contact" className="btn ">
                All Contacts
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
