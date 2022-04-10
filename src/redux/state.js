import { rerenderEntireTree } from "../render";

let state={
    profilePage:{
        posts : [
            {id:1, message:"hi", LikesCount:'40'},
            {id:2, message:"you", LikesCount:'13'},
            {id:3, message:"we", LikesCount:'12'} ,
            ],
       
    },
    dialogsPage:{
        messages :[
            {id:1, message:"hi"},
            {id:2, message:"you"},
            {id:3, message:"we"},
            {id:4, message:"tyu"},
            {id:5, message:"rrr"},   
            ] ,
            dialogs :[
                {id:1, name:"Dimych"},
                {id:2, name:"Andrey"},
                {id:3, name:"Sveta"},
                {id:4, name:"Sacha"},
                {id:5, name:"Valera"},   
              ] ,
    }
   
}

export let addPost=(postMessage)=>{
    let newPost={
        id:5,
        message:postMessage,
        LikesCount:0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export default state;