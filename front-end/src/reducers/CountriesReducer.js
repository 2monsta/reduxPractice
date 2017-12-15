export default function(state=[], action){

  if(action.type === "ADD_COUNTRY"){
    console.log(action.payload.data);
    return action.payload.data
  }else{
    return state;
  }
}