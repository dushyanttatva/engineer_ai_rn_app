import _ from 'lodash';
import moment from 'moment';
import {Alert} from 'react-native';
//import DeviceInfo from "react-native-device-info";
import AsyncStorage from "@react-native-community/async-storage";

import * as NavigationService from "../services/navigationService";

/**
 * CHECKS IF THE PASSED VALUE IS EMPTY STRING OR NOT
 * RETURN `true` IF STRING IS EMPTY ELSE RETURN `false`
 */
export function isEmpty(val) {
  let isValEmpty = true;
  if (!_.isNil(val) && _.trim(String(val)).length > 0) {
    isValEmpty = false;
  }
  return isValEmpty;
}
/**
 * CHECKS IF THE PASSED VALUE IS VALID EMAIL
 * RETURN `true` IF VALID ELSE RETURN `false`
 */
export function isEmail(fieldName, val) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (isEmpty(val)) {
    return { status: false, message: `Please enter ${fieldName}` };
  } else if (!regex.test(val)) {
    return { status: false, message: `Please enter valid ${fieldName}` };
  }
  return { status: true, message: "" };
}

/* To handle required validation */
export function requireValidate(fieldName, value, isBool = false) {
  if (isBool) {
    if (value) {
      return { status: true, message: "" };
    }
    return { status: false, message: "" };
  }
  if (value === "" || value === undefined || value === null) {
    if (fieldName === "lmsUrl") {
      return { status: false, message: `Please select ${fieldName}` };
    }
    else {
      return { status: false, message: `Please enter ${fieldName}` };
    }
  }
  return { status: true, message: "" };
}

export function hasDeviceNotch (){
  return false;
  //return DeviceInfo.hasNotch();
}

export const customAlert = (title = "", message ="", okOnPress, cancelOnPress) => {
  const buttons = [];
  cancelOnPress ? buttons.push({text: 'Cancel', onPress: () => cancelOnPress, style: 'cancel'}) : "";
  okOnPress ? buttons.push({text: 'OK', onPress: () => okOnPress}) : buttons.push({text: 'OK', onPress: () => console.log('Ok Pressed')})
  return(
    Alert.alert(
      title,
      message,
      buttons
    )
  );
}

export const getTimeDifference = (dateTo, dateFrom, diffIn = 'minutes') => {
  console.log('getTimeDifference: ', dateTo, dateFrom);
  var now = dateTo ? moment(Number(dateTo)) : moment();
  var dateToCheckAgainst = dateFrom ? moment(Number(dateFrom)) : moment();
  var diff = now.diff(dateToCheckAgainst, diffIn);
  console.log('getTimeDifferenceM: ', now, dateToCheckAgainst, diff);
  return diff;
}