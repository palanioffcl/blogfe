import types from "./ActionTypes";
import { takeLatest, put, call } from "redux-saga/effects";
import { axiosGet, axiosPost, setAuthToken } from "../../Utils/axios";
import { LoginResponse } from "./LoginActions";
import { currUserResp } from "./LoginActions";

function* login({ payload }) {
    try {
        const response = yield call(() =>
            axiosPost("users/login", payload).then((response) => response?.data)
        );
        if (response.success) {
            localStorage.setItem("token", response?.data.access_token);
            setAuthToken(response?.data.access_token);
        }
        yield put(LoginResponse(response));
    } catch (error) {
        yield put(LoginResponse(error));
    }
}

function* currUserReq() {
    try {
        const response = yield call(() =>
            axiosGet("users/whoami").then((response) => response.data.message)
        );
        // console.log(response, "USERR REPONSE")
        yield put(currUserResp(response));
    } catch (error) {
        yield put(currUserResp(error));
    }
}


export function* loginWatcherSaga() {
    yield takeLatest(types.LOGIN_REQ, login);
    yield takeLatest(types.CUR_USER_REQ, currUserReq);
}