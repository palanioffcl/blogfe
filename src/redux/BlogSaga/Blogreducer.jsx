import types from './ActionTypes';

const initialState = {};

const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.BLOG_REQ:
            return {
                ...state,
            };
        
        case types.BLOG_CREATE:
            return {...state};
            
        case types.BLOG_RESP:
            return {
                ...state,
                blogs: action.payload,
            };

        case types.BLOG_GET:
            return {
                ...state,
                indiblog: action.payload,
            }

        default:
            return state;
    }
};

export default BlogReducer;
