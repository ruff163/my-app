import React from "react";
import ava from "./ava.jpg"
import s from './Post.module.css'


const Post =(props)=>{
    return(
      <div className={s.content}>
        <div className={s.Post}>
          <img src={ava} alt=''/>
          {props.message}
        </div>
          <div><span>like</span>{props.LikesCount}</div>
      </div>
    )
}
export default Post;