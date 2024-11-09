import types from "./ActionTypes";
import { takeLatest, put, call } from "redux-saga/effects";
import { BlogResponse } from "./BlogActions";
import { axiosGet, axiosPost } from "../../Utils/axios";


function* blogReq() {
    try {
        const response = yield call(() =>
            axiosGet("blogs/myblogs").then((response) => response?.data)
        );
        yield put(BlogResponse(response.data));
    } catch (error) {
        yield put(BlogResponse(error));
    }
}

function* newBlog({ payload }) {
    try {
        const response = yield call(() =>
            axiosPost("blogs", payload).then((response) => response?.data));
        yield put(BlogResponse(response.data));
    } catch (error) {
        yield put(BlogResponse(error));
    }
}

// function* indiblogGet() {
//     try {
//         const response = yield call(() =>
//             axiosGet("blogs/myblogs").then((response) => response?.data)
//         );
//         yield put(BlogResponse(response.data));
//     } catch (err) {
//         yield put(BlogResponse(error));
//     }
// }

export function* BlogWatcherSaga() {
    yield takeLatest(types.BLOG_REQ, blogReq);
    yield takeLatest(types.BLOG_CREATE, newBlog);
}