import React from "react";
import { NavLink } from "react-router-dom";
import s from './nav.module.css';
const Nav=()=>{
    return(
        <nav className={s.nav}>
        <ul>
          <li><NavLink to="/profile"  className={({ isActive }) => (isActive ? s.active : s.inactive)}>Моя страница</NavLink></li>
          <li><NavLink to="/Dialogs" className={({ isActive }) => (isActive ? s.active : s.inactive)}>Мессенджер</NavLink></li>
          <li><NavLink to="/Users" className={({ isActive }) => (isActive ? s.active : s.inactive)}>Список пользователей</NavLink></li>
          <li><NavLink to="#">Новости</NavLink></li>
         
          <li><NavLink to="#">Звонки</NavLink></li>
         
          <li><a href="www.google.com">Сообщества</a></li>
          <li><a href="www.google.com">Фотографии</a></li>
          <li><a href="www.google.com">Музыка</a></li>
          <li><a href="www.google.com">Видео</a></li>
          <li><a href="www.google.com">Клипы</a></li>
        </ul>
      </nav>
    )
}
export default Nav;