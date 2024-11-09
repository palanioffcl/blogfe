import { combineReducers } from "@reduxjs/toolkit";
import signUpReducer from './SignUpSaga/SIgnUpreducer';
import loginReducer from "./LoginSaga/Loginreducer";
import BlogReducer from "./BlogSaga/Blogreducer";

const rootReducer = combineReducers({
    signup: signUpReducer,
    login: loginReducer,
    blogs: BlogReducer
});

export default rootReducer;