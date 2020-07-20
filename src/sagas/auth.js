import AsyncStorage from '@react-native-community/async-storage';
import { put, takeLatest, delay } from "redux-saga/effects";

import {actionsType, endpoint} from "../constants";
import * as AuthAction from "../redux/actions/authActions";
import {
  postLoginRequest
} from "../services/authService";
import * as NavigationService from "../services/navigationService";
import { customAlert } from '../utils/commonFunctions';

/**
 * watcher
 */
function* postLoginWatcher() {
  yield takeLatest(actionsType.POST_LOGIN_REQUEST, postLoginHandler);
}

/**
 * handler
 * @param value
 */
function* postLoginHandler(value) {
  try {
    const url = endpoint.API_URL + value.payload.page;
    const response = yield postLoginRequest(url, '');
    if (response.success) {
      yield put(AuthAction.setPostData(response.data.hits));
    } else {
      //customAlert('Failed to get Post', response.message);
    }
  } catch (error) {
    console.log("postLoginHandler error", error);
  }
}

export default [
  postLoginWatcher
];
