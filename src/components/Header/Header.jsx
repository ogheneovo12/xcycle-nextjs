import React from "react";
import HeaderStyles from "./Header.module.scss";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/img/logo.jpg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(props) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  function toggleMenu() {
    setShowMobileMenu(!showMobileMenu);
  }

  return (
    <header className={HeaderStyles.header}>
      <div className={`pageWrap ${HeaderStyles.inner}`}>
        <div className={HeaderStyles.logo}>
          <Image src={logo} alt='Xcycle Logo' />
        </div>
        <div
          className={`${HeaderStyles.group} ${
            showMobileMenu ? HeaderStyles.isVisible : ""
          }`}>
          <nav className={HeaderStyles.nav}>
            <ul>
              <li>
                <Link href='/'>
                  <a>home</a>
                </Link>
              </li>
              <li>
                <Link href='/shop'>
                  <a>shop</a>
                </Link>
              </li>
              <li>
                <Link href='/gallery'>
                  <a>categories</a>
                </Link>
              </li>
              <li>
                <Link href='/gallery'>
                  <a>Galleries</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className={`${HeaderStyles.auth_btn} ${HeaderStyles.visibleAuthMenu}`}>
            <button className='btn_ghost'>login</button>
            <button className='btn_primary'>sign up</button>
          </div>
          <span onClick={toggleMenu} className={HeaderStyles.close}>x</span>
        </div>
        <span onClick={toggleMenu} className={HeaderStyles.mobileToggler}>
          <FontAwesomeIcon icon={faBars} />
        </span>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
