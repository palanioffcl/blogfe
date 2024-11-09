import types from './ActionTypes';


const initialState = {};

const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGNUP_REQ:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default signUpReducer;