import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light shadow-sm mb-4 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 text-warning" to="/">
          MyFood
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5">
            <li className="nav-item">
              <NavLink className="nav-link text-warning" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link text-warning" to="/allFoods">
                All-Food
              </NavLink>
            </li>

            <li className="nav-item mt-1 mx-2">
              <NavLink className="btn btn-warning" to="/ordernow">
                Order Now
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
