import types from "./ActionTypes";

export const BlogReq = (payload) => ({
    type: types.BLOG_REQ,
    payload: payload
});

export const BlogResponse = (payload) => ({
    type: types.BLOG_RESP,
    payload: payload
});

export const BlogCreate = (payload) => ({
    type: types.BLOG_CREATE,
    payload: payload
});

export const BlogGet = (payload) => ({
    type: types.BLOG_GET,
    payload: payload
})