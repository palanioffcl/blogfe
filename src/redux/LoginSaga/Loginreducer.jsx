import types from './ActionTypes';

const initialState = {};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQ:
            return {
                ...state,
            };
        
        case types.LOGIN_RESPONSE:
            return {
                ...state,
                user_token: action.payload.data.access_token,
            };

        case types.CUR_USER_REQ:
            return {
                ...state, 
            };

        case types.CUR_USER_RESP:
            return {
                ...state,
                user_token: action.payload.data
            }

        default:
            return state;
    }
};

export default loginReducer;
