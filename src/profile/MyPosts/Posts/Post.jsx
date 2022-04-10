import React from "react";

import s from './Post.module.css'


const Post =(props)=>{
    return(
      <div className={s.content}>
        <div className={s.Post}>
          <img src="https://photoshablon.com/_ph/46/1/782744670.jpg?1645214389"/>
          {props.message}
        </div>
          <div><span>like</span>{props.LikesCount}</div>
      </div>
    )
}
export default Post;