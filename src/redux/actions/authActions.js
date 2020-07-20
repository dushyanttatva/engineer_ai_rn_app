import {actionsType} from "../../constants";

// Login
export const postLoginAction = (postData) => ({
  type: actionsType.POST_LOGIN_REQUEST,
  payload: postData,
});

//Post Data
export const setPostData = (postData) => ({
  type: actionsType.SET_POST_DATA,
  payload: postData,
});

//Post Details Data
export const setPostDetailsData = (postData) => ({
  type: actionsType.SET_POST_DETAIL_DATA,
  payload: postData,
});