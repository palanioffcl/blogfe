import types from "./ActionTypes";

export const SignUpReq = (payload) => ({
    type: types.SIGNUP_REQ,
    payload: payload,
});

export const SignUpResponse = (signupRes) => ({
    type: types.SIGNUP_RESPONSE,
    payload: signupRes,
});