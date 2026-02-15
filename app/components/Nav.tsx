import React from 'react'
import logo from '../assets/logo.png'
import Image from 'next/image';

const Nav = () => {
  return (
    <div className="nav__wrapper">
      <figure className="nav__img--mask">
        <Image className="nav__img" src={logo} alt="logo" />
      </figure>
      <ul className="nav__list--wrapper">
        <li className="nav__list nav__list--login">Login</li>
        <li className="nav__list nav__list--mobile">About</li>
        <li className="nav__list nav__list--mobile">Contact</li>
        <li className="nav__list nav__list--mobile">Help</li>
      </ul>
    </div>
  );
}

export default Nav