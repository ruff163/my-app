import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/profileInfo";


const Profile =(props)=>{
  
  return(
      <main className={s.content}>
        <ProfileInfo />
        <MyPosts posts={props.state.posts} addPost={props.addPost} />
      </main>
  )
}
export default Profile;