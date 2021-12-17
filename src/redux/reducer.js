// import fristData from "../redux/action";
// import secondData from "../redux/action";
const INITIAL_STATE = {};

function numberReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "loginData":
      return { ...state, ...action.data };
    case "signupData":
      return { ...state, ...action.data };
    case "bookingData":
      return { ...state, ...action.data };
    default:
      return state;
  }
}

export default numberReducer;
