import AsyncStorage from '@react-native-community/async-storage';
//import base64 from 'base-64';

import { RequestBuilder } from "./requestBuilder";
import { endpoint } from "../constants";

export async function postLoginRequest(urlParam, params) {
  //let basicAuth = "Basic " + base64.encode(params.username+":"+params.password);
  //AsyncStorage.setItem('basicAuth', basicAuth);
  const headers = {
    "Content-Type": "application/json",
    //Authorization: basicAuth
  };
  //Authorization: `Bearer ${bearerToken}`;
  const url = urlParam;
  return RequestBuilder(url, params, "GET", headers);
}
