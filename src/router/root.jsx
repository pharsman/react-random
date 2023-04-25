import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <div className="nav">
        <NavLink to="" end>
          Home
        </NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
