import types from "./ActionTypes";
import { takeLatest, put, call } from "redux-saga/effects";
import { axiosGet, axiosPost, axiosPut, setAuthToken } from "../../Utils/axios";
import { SignUpResponse } from "./SignUpActions";

function* signUpAsync({ payload }) {
    try {
        const response = yield call(() =>
            axiosPost("users/signup", payload).then((response) => response?.data)
        );
        yield put(SignUpResponse(response));
    } catch (error) {
        yield put(SignUpResponse(error));
    }
}

export function* SignUpWatcherSaga() {
    yield takeLatest(types.SIGNUP_REQ, signUpAsync);
}