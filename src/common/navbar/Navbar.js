import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { useMatch } from "react-router-dom";
import "material-icons/iconfont/material-icons.css";

const Navbar = () => {
  const matchAdmin = useMatch("/admin/*");
  const matchDashboard = useMatch("/dashboard/*");
  const items = [1, 2, 3];

  return (
    <nav className="navbar">
      <img src={logo} className="logo" />
      <div className="divider"></div>
      <ul className="path">
        <li
          className={matchDashboard != null ? "sub main activated" : "sub main"}
        >
          <div className="title">
            <span class="icon material-icons-outlined">analytics</span>
            <span className="label">Dashboard</span>
          </div>
          <ul className="sub-list">
            <li>
              <NavLink to="/dashboard/default" activeClassName="active">
                Général
              </NavLink>
            </li>
            {items.map((item) => (
              <li>
                <NavLink to={"/dashboard/" + item} activeClassName="active">
                  Env {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
        <li className="main">
          <NavLink
            to="/notification"
            activeClassName="active"
            className="title primary"
          >
            <span class="icon material-icons-outlined">notifications</span>
            <span className="label">Notifications</span>
          </NavLink>
        </li>
        <li className="main">
          <NavLink
            to="/facture"
            activeClassName="active"
            className="title primary"
          >
            <span class="icon material-icons-outlined">request_quote</span>
            <span className="label">Factures</span>
          </NavLink>
        </li>
        <li className={matchAdmin != null ? "sub main activated" : "sub main"}>
          <div className="title">
            <span class="icon material-icons-outlined">edit</span>
            <span className="label">Admin panel</span>
          </div>
          <ul className="list">
            <li>
              <NavLink to="/admin/new-client" activeClassName="active">
                Création d'un client
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/new-admin"} activeClassName="active">
                Création d'un admin
              </NavLink>
            </li>
            <li>
              <NavLink to={"/admin/edit"} activeClassName="active">
                Modification
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
      <div className="avatar">
        <div className="divider"></div>
        <div className="user"></div>
      </div>
    </nav>
  );
};

export default Navbar;
