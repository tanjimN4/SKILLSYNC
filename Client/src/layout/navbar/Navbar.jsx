import { Link } from "react-router-dom";
import GradientText from "../../blocks/TextAnimations/GradientText/GradientText";
const Navbar = () => {
  const links = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to="/features">Features</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </>
  return (
    <div>
      <div className="navbar bg-gray-900 bg-opacity-90 text-white shadow-md backdrop-blur-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div>
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class text-2xl"
            >
              <Link to={'/'}>SkillSync</Link>
            </GradientText>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <GradientText
              colors={["#cfe8ff", "#5ac8fa", "#ffffff", "#5ac8fa", "#cfe8ff"]}
              animationSpeed={2.5}
              showBorder={true}
              className="px-5 py-2 rounded-md font-semibold bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              Sign Up
            </GradientText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;