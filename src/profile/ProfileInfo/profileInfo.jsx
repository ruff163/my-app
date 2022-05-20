import React from "react";
import s from "./profileInfo.module.css";
import logo from "./dorozka.jpg"


const ProfileInfo =()=>{
    return(
      <div className={s.content}>
        <img className={s.image} src={logo} alt=''/>
        <div className={s.content_ava}>ava + description</div>
      </div>
    )
}
export default ProfileInfo;