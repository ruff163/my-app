const Update_New_Post_Text='update-New-Post-Text';
const ADD_POST='ADD-POST';

let initialState={
    posts : [
        {id:1, message:"hi", LikesCount:'40'},
        {id:2, message:"you", LikesCount:'13'},
        {id:3, message:"we", LikesCount:'12'} ,
        ],
   newPostText:'it-kan'
};
const profileReducer=(state=initialState,action)=>{


  switch (action.type){
      case ADD_POST:{
        let newPost={
            id:Date.now(),
            message:state.newPostText,
            LikesCount:0,
        };
        return{...state,
            posts:[...state.posts,newPost],
            newPostText:'',
            }
        
    }
    case Update_New_Post_Text:{
        return{...state,
            newPostText:action.newText
        }
    
    }
       default :
       return state;
    };
};

export const addPostActionCreator=()=>({type:ADD_POST });
 export const updateNewPostTextActionCreator=(text)=>({
    type:Update_New_Post_Text,newText:text });

export default profileReducer;