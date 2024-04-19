import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col justify-around gap-5 bg-sky-50 py-8 text-black">
        <nav className="text-lg">
          <ul className="flex h-full flex-wrap items-center justify-center gap-3">
            <li>
              <a className="cursor-pointer hover:underline">Home</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Add Contact</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">All Contacts</a>
            </li>
          </ul>
        </nav>
        <nav className="text-lg">
          <ul className="flex h-full flex-wrap items-center justify-center gap-5">
            <li className="cursor-pointer">
              <a>
                <FaFacebookF className="text-xl" />
              </a>
            </li>
            <li className="cursor-pointer">
              <a>
                <FaYoutube className="text-xl" />
              </a>
            </li>
            <li className="cursor-pointer">
              <a>
                <FaTwitter className="text-xl" />
              </a>
            </li>
          </ul>
        </nav>
        <aside className="text-center text-sm">
          <p>&copy; 2024 Contactify. All Rights Reserved.</p>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;
