import React from "react";

import classes from './nav.module.css';
const Nav=()=>{
    return(
        <nav className={classes.nav}>
        <ul>
          <li><a href="#">Моя страница</a></li>
          <li><a href="#">Новости</a></li>
          <li><a href="#">Мессенджер</a></li>
          <li><a href="#">Звонки</a></li>
          <li><a href="#">Друзья</a></li>
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