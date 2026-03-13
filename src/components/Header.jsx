import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold">
          Scatch
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Cart
          </NavLink>

          <NavLink
            to="/owner-login"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "hover:text-blue-500"
            }
          >
            Admin
          </NavLink>
        </div>

      </nav>
    </header>
  );
};

export default Header;
