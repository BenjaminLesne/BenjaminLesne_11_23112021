import React from "react";
import "../styles/Header.css";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

class Header extends React.Component {
  render() {
    //all nav links and their info
    const navItems = {
      home: {
        value: "Accueil",
        activePage: false,
        path: "/BenjaminLesne_11_23112021/",
      },
      about: {
        value: "A Propos",
        activePage: false,
        path: "/BenjaminLesne_11_23112021/about",
      },
    };

    //check url to define which nav link should be displayed as active
    switch (true) {
      case window.location.pathname === "/BenjaminLesne_11_23112021/":
        navItems.home.activePage = true;
        break;

      case window.location.pathname.toLowerCase() ===
        "/BenjaminLesne_11_23112021/about":
        navItems.about.activePage = true;
        break;

      default:
        break;
    }

    //allow to set an "active link"
    function CustomLink({ children, to, myClassName, ...props }) {
      let resolved = useResolvedPath(to);
      let match = useMatch({ path: resolved.pathname, end: true });

      return (
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
          className={myClassName}
        >
          {children}
        </Link>
      );
    }

    //generate nav items HTML and store it in array
    const GenerateNavItems = () => {
      let myHTML = [];

      for (const navLink in navItems) {
        myHTML.push(
          <CustomLink
            to={`${navItems[navLink].path}`}
            key={`${navItems[navLink].path}`}
            myClassName={
              "header__link" +
              (navItems[navLink].activePage ? " header__link--active" : "")
            }
          >
            {navItems[navLink].value}
          </CustomLink>
        );
      }

      return myHTML;
    };

    return (
      <header className="header">
        <div className="header__logo">
          <Link to={navItems.home.path}>
            <Logo />
          </Link>
        </div>
        <nav className="header__nav">
          {GenerateNavItems().map((item) => item)}
        </nav>
      </header>
    );
  }
}
export default Header;
