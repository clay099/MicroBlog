import { combineReducers } from "redux";
import posts from "./posts";
import comments from "./comments";
import titles from "./titles";

const rootReducer = combineReducers({ posts, comments, titles });

export default rootReducer;
