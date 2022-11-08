import * as actions from "./actionType";

//central storage (state) data- common storage area - javascript
//put all common data
//common state
const initState = {
  posts: [],
};

//Reducer is a function and return application state. Reducer do not change any part of the state. It produces a new instance of the state with all necessary updates.
//reducer function takes in 2 parameters (1. 1st will be the initial state "state=initState")(2. action: will take some action value)
const reducer = (state = initState, action) => {
  console.log(action); //action is a object

  switch (action.type) {
    // case actions.INC:
    //calling the previous state (keeping a copy of the state) and add the properties inside the return()
    // return { ...state, count: state.count + action.payload };
    // case actions.DEC:
    //can do if-else
    // return { ...state, count: state.count - action.payload };
    case actions.GET_POSTS:
      console.log(action.payload.httpResponse);
      return { ...state, posts: action.payload.httpResponse.player };
    //(calling out an object this.state)
    default:
      return state;
  }
};
export default reducer;
