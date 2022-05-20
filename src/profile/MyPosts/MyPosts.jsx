import React from "react";
import Post from './Posts/Post';
import s from './MyPosts.module.css';



const MyPosts =(props)=>{
  
  let postsElements=props.posts.map(p=><Post message={p.message} key={p.id} LikesCount={p.LikesCount}/>)
    let newPostElement=React.createRef();
    let onAddPost=()=>{
      props.addPost()
        // props.dispatch(addPostActionCreator())
      
    };
    let onPostChange =()=>{
      let text=newPostElement.current.value;
      props.updateNewPostText(text)
    };
    return(
      <div className={s.MyPosts}>
        <div className={s.title}><h3>My posts</h3></div>
        <div className={s.form}>
          <textarea className={s.pole} onChange={onPostChange} ref={newPostElement} 
          value={props.newPostText}/>
          <button onClick={onAddPost} className={s.button}>add</button></div>
       {postsElements}
       </div>
    )
}
export default MyPosts;