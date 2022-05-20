
const Update_New_Message_Body="Update_New_Message_Body";
const SEND_MESSAGE="SEND_MESSAGE";

let initialState={
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
};
 const dialogsReducer=(state=initialState,action)=>{
let stateCopy={
    ...state,
    messages:[...state.messages]};

    switch(action.type){
        case Update_New_Message_Body:
            return{
                ...state,
                newMessageBody:action.body
               };
    

        case SEND_MESSAGE:
            let body= stateCopy.newMessageBody; 
            return{
                ...state,
                newMessageBody:'',
                messages:[...state.messages,{id:Date.now(),message:body}]};
    

        default:
            return state ;
    }
};

export const sendMessageCreator=()=>({type:SEND_MESSAGE });
export const updateNewMessageBodyCreator=(text)=>({
    type:Update_New_Message_Body,body:text })
   
export default dialogsReducer;