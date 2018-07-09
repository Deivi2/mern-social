import {ADD_POST,GET_POSTS,POST_LOADING, DELETE_POST,GET_POST} from "../actions/types";

const initialState = {
    posts: [],
    post: {},
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {

        case POST_LOADING:
            return{
                ...state,
                loading: true
            };

        case GET_POSTS:
            return{
                ...state,
                posts: action.payload,
                loading: false
            };

        case ADD_POST:
            return {
                ...state,
                //action.payload adds post, ...state.post add old posts
                posts: [action.payload, ...state.posts]
            };

        case DELETE_POST:
            return{
                ...state,
                //delete post locally
                posts: state.posts.filter(post => post._id !== action.payload)
            };

        case GET_POST:
            return{
                ...state,
                post: action.payload,
                loading:false
            };

        default:
            return state;
    }


}