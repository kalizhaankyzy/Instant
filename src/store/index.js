import {combineReducers} from "redux";
import {imageReducer} from "./ImageStore";
import {themeReducer} from "./ThemeStore";

export default combineReducers({
    images: imageReducer,
    theme: themeReducer
})