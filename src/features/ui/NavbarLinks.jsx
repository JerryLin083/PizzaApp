import { NavLink } from "react-router-dom";
import { links } from "../../data";
import { toTop } from "../../data/method";

const NavbarLinks = ({ setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(false);
    toTop();
  };

  return (
    <>
      {links.map((item) => (
        <li
          key={item.title}
          className="hover:text-orange-500 transition-colors duration-300"
        >
          <NavLink
            className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            onClick={handleClick}
            to={item.link}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavbarLinks;
