import React from "react";
import { Link } from "react-router-dom";

// style
import './Hero.scss'

//images
import hero_img from '../../assets/images/hero-maker.png'
import { FiChevronDown } from "react-icons/fi"

export default function Hero() {

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__bigbox">
          <div className="hero__box">
            <h2 className="hero__title">Bio<span>Clean</span></h2>
            <p className="hero__text">Услуги дезинфекции в Ташкенте</p>
            <p className="hero__info">Мы избавим ваш бизнес и дом от вредителей. профессиональные услуги по дезинфекции, дезинсекции, дератизации и дезодорации от наших специалистов!</p>
            <Link className="hero__link" to={"/"}>Уничтожить вредителей           <FiChevronDown className="hero__icon" />
            </Link>
          </div>

          <div className="hero__imgbox">
            <img className="hero__img" src={hero_img} alt="hero-images" />
          </div>
        </div>
      </div>
    </section>
  )
}