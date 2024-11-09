import types from "./ActionTypes";

export const LoginReq = (payload) => ({
    type: types.LOGIN_REQ,
    payload: payload,
});

export const LoginResponse = (loginRes) => ({
    type: types.LOGIN_RESPONSE,
    payload: loginRes,
});

export const currUserReq = () => ({
    type: types.CUR_USER_REQ
});

export const currUserResp = (curUserRes) => ({
    type: types.CUR_USER_RESP,
    payload: curUserRes,
});