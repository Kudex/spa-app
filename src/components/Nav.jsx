import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./style/Nav.css";
import { appRotes } from "../routes/Routes";

const Nav = (props) => {
  const menuArrow = useRef();
  const onClickArrow = () => {
    menuArrow.parentElement.classList.toggle("_active");
  };

  document.body.classList.add("_pc");

  // Меню бургер

  const menuIkon = useRef();
  const onClickIkon = () => {
    const iconMenu = document.querySelector(".menu_icon");
    const menuBody = document.querySelector(".menu_body");

    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  };

  return (
    <>
      <header className="header">
        <div className="header_container">
          <Link className="header_logo" to="/"></Link>
          <div className="header_menu menu">
            <div onClick={onClickIkon} ref={menuIkon} className="menu_icon">
              <span></span>
            </div>
            <nav className="menu_body">
              <ul className="menu_list">
                <li>
                  <Link className="menu_sub-link" to={appRotes.home.path}>
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link className="menu_sub-link" to={appRotes.posts.path}>
                    Posts
                  </Link>
                </li>
                <li>
                  <Link className="menu_sub-link" to={appRotes.planets.path}>
                    Planets
                  </Link>
                </li>
                <li>
                  <Link className="menu_sub-link" to={appRotes.contacts.path}>
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link className="menu_sub-link" to="/">
                    Pages{" "}
                  </Link>
                  <span
                    onClick={onClickArrow}
                    ref={menuArrow}
                    className="menu_arrow"
                  ></span>
                  <ul className="menu_sub-list">
                    <li>
                      <Link className="menu_sub-link" to={appRotes.home.path}>
                        Home{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="menu_sub-link" to={appRotes.posts.path}>
                        Posts
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="menu_sub-link"
                        to={appRotes.planets.path}
                      >
                        Planets
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="menu_sub-link"
                        to={appRotes.contacts.path}
                      >
                        Contacts
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
