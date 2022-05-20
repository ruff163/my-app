import React from "react";
import MyPostsContainer from "./MyPosts/MyPostscontainer";
import s from "./profile.module.css";
import ProfileInfo from "./ProfileInfo/profileInfo";


const Profile =()=>{

  return(
      <main className={s.content}>
        <ProfileInfo />
        <MyPostsContainer />
      </main>
  )
}
export default Profile;