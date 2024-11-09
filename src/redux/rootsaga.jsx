import { all } from "redux-saga/effects";
import { SignUpWatcherSaga } from "./SignUpSaga/SingUpsaga";
import { loginWatcherSaga } from "./LoginSaga/Loginsaga";
import { BlogWatcherSaga } from "./BlogSaga/Blogsaga";


export default function* RootSaga() {
    yield all([
        SignUpWatcherSaga(),
        loginWatcherSaga(),
        BlogWatcherSaga(),
    ]);
}