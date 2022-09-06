import React from "react";
import { Link } from "react-router-dom";

// style
import './Header.scss'

// images
import logo from "../../assets/images/logo.webp";
import tel from "../../assets/images/tel.svg";
import {BsFillTelephoneForwardFill} from "react-icons/bs"


export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__box">
          <nav className="header__nav">
            <ul className="header__list">
              <li className="header__item">
                <Link className="header__link" to={"/"}>ГЛАВНАЯ</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to={"/"}>О НАС</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to={"/"}>УСЛУГИ</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to={"/"}>ВРЕДИТЕЛИ</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to={"/"}>ПРЕИМУЩЕСТВА</Link>
              </li>
              <li className="header__item">
                <Link className="header__link" to={"/"}>КОНТАКТЫ</Link>
              </li>
            </ul>
          </nav>
          <a className="header__contact" href="tel:+998987074922">
            <BsFillTelephoneForwardFill />
            +998(98)707-49-22</a>

          <div className="header__logobox">
            <Link to={'/'}> <img className="header__logo" src={logo} alt="logo" /></Link>
          </div>
        </div>
      </div>
    </header>
  )
}