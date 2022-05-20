const follow='follow';
const unfollow='unfollow';
const SET_USERS="SET_USERS"
let initialState={
    users : [
        // {id:1, followed:false, fullname:"Dmitry", status:"i am boss",location:{city:"minsk",country:'Belarus'}},
        // {id:2, followed:true, fullname:"Anton",status:"i am crazy",location:{city:"samara",country:'russia'}},
        // {id:3, followed:false, fullname:"Tanya",status:"i am woman",location:{city:"london",country:'Great britain'}},
        ],
   newPostText:'it-kan'
};
const usersReducer=(state=initialState,action)=>{


  switch (action.type){
     case follow:
      return{   ...state,
            users:state.users.map(users=>{
                if(users.id===action.userId){
                    return {...users,followed:true }
                }
                return users;
            })
        }
     case unfollow:
        return{   ...state,
            users:state.users.map(users=>{
                if(users.id===action.userId){
                    return {...users,followed:false }
                }
                return users;
            })
        }
      case SET_USERS:{
          return {...state,users:[...state.users,...action.users]
        } 
          }  
       default :
       return state;
    };
};

export const followedAc=(userId)=>({type:follow ,userId});
export const unfollowedAc=(userId)=>({type:unfollow,userId });
export const setUsersAc=(users)=>({type:SET_USERS,users });

export default usersReducer;