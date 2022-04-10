import React from "react";
import Post from './Posts/Post';
import s from './MyPosts.module.css'


const MyPosts =(props)=>{
  
  let postsElements=props.posts.map(p=><Post message={p.message} LikesCount={p.LikesCount}/>)
    let newPostElement=React.createRef();
    let addPost=()=>{
    let text=newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value="";
    }
    return(
      <div className={s.MyPosts}>
        <div className={s.title}><h3>My posts</h3></div>
        <div className={s.form}>
          <textarea className={s.pole} ref={newPostElement}></textarea>
          <button onClick={addPost} className={s.button}>add</button></div>
       {postsElements}
       </div>
    )
}
export default MyPosts;