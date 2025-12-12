import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
function Navbar({ setTheme, theme }) {
  function changeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  }
  return (
    <div
      className={`navbar ${
        theme === "dark" ? "bg-base-100 text-white" : "bg-white text-black"
      } shadow-xl mb-10`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">FN-45</a>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-ghost btn-circle text-2xl"
          onClick={changeTheme}
        >
          {theme === "light" ? <CiDark /> : <CiLight />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
