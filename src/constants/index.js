//https://developer.engineer.ai/#/reset-password?guid=5723&token=JegX-mdNypN8GYP4feLk
//https://github.com/dushyanttatva/engineer_ai_rn_app.git
const apiUrl = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=";

export const endpoint = {
  API_URL: apiUrl
};

export const actionsType = {
  POST_LOGIN_REQUEST: "POST_LOGIN_REQUEST",
  SET_POST_DATA: "SET_POST_DATA",
  SET_POST_DETAIL_DATA: "SET_POST_DETAIL_DATA"
}