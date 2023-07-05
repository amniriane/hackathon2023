import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { useMatch } from "react-router-dom";

const Navbar = () => {
  const matchAdmin = useMatch("/admin/*");
  const matchDashboard = useMatch("/dashboard/*");
  const items = [1, 2, 3];

  return (
    <nav className="navbar">
      <img src={logo} alt="La maison jungle" className="logo" />
      <div className="divider"></div>
      <ul className="list">
        <li
          className={
            matchDashboard != null
              ? "main dashboard activated"
              : "main dashboard"
          }
        >
          <div className="title">Dashboard</div>
          <ul className="list">
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
            className="title"
          >
            Notifications
          </NavLink>
        </li>
        <li className="main">
          <NavLink to="/facture" activeClassName="active" className="title">
            Factures
          </NavLink>
        </li>
        <li
          className={
            matchAdmin != null ? "main dashboard activated" : "main dashboard"
          }
        >
          <div className="title">Admin panel</div>
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
