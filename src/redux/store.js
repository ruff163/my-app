import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store={ 
     _state:{
        profilePage:{
            posts : [
                {id:1, message:"hi", LikesCount:'40'},
                {id:2, message:"you", LikesCount:'13'},
                {id:3, message:"we", LikesCount:'12'} ,
                ],
           newPostText:'it-kan'
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
            newMessageBody:''
        },
       
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log("hello")
    },
    subscribe(observer){
        this._callSubscriber=observer;
        },
    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._callSubscriber(this._state);
    }
}




export default store;
window.store=store;