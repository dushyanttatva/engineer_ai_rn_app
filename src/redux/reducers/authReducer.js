import moment from 'moment';
import {actionsType} from "../../constants";
// Initial State
const initialState = {
  postsItemArray: [],
  postDetailsData: null,
  postLoader: false
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.POST_LOGIN_REQUEST: {
      return {
        ...state,
        postLoader: true
      };
    }
    // Set post data
    case actionsType.SET_POST_DATA: {
      return {
        ...state,
        postsItemArray: action.payload,
        postLoader: false
      };
    }
    case actionsType.SET_POST_DETAIL_DATA: {
      return {
        ...state,
        postDetailsData: action.payload
      };
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;
