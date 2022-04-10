import React from "react";
import { NavLink } from "react-router-dom";
import s from './nav.module.css';
const Nav=()=>{
    return(
        <nav className={s.nav}>
        <ul>
          <li><NavLink to="/profile"  className={({ isActive }) => (isActive ? s.active : s.inactive)}>Моя страница</NavLink></li>
          <li><NavLink to="#">Новости</NavLink></li>
          <li><NavLink to="/Dialogs" className={({ isActive }) => (isActive ? s.active : s.inactive)}>Мессенджер</NavLink></li>
          <li><NavLink to="#">Звонки</NavLink></li>
          <li><NavLink to="#">Друзья</NavLink></li>
          <li><a href="#">Сообщества</a></li>
          <li><a href="#">Фотографии</a></li>
          <li><a href="#">Музыка</a></li>
          <li><a href="#">Видео</a></li>
          <li><a href="#">Клипы</a></li>
        </ul>
      </nav>
    )
}
export default Nav;