//actions methods - link to 'counter.js' - mapDispatchToProps
//counter - action - reducer
//do api calling here ONLY

import axios from "axios";
import * as actions from "./actionType";

//action methods
// export const onIncrement = (val) => {
//   console.log(val);

//   return {
//     type: actions.INC,
//     payload: val,
//   };
// };

// export const onDecrement = (d) => {
//   console.log(d);

//   return {
//     type: actions.DEC,
//     payload: d,
//   };
// };

export const onGetData = () => {
  return (dispatch) => {
    // let url = "https://randomuser.me/api/?results=20";
    let url =
      "https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=T%";
    axios
      .get(url)
      .then((res) => {
        //self-invoking function
        dispatch(
          ((data) => {
            return {
              type: actions.GET_POSTS,
              payload: {
                httpResponse: data,
              },
            };
          })(res.data)
        );
      })
      .catch((err) => console.log(err));
  };
};
