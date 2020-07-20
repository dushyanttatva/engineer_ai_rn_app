import { StyleSheet, Platform } from "react-native";
// import colors, fonts
import colors from "../../constants/colors";

export default StyleSheet.create({
  mainContainer: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  fullWidthButtonWrapper: {
    width: "100%",
    paddingLeft: "8%",
    paddingRight: "8%"
  },
  fullWidthButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  shadowStyle: {
    shadowOffset:
      Platform.OS === "ios"
        ? { width: 0, height: 0.5 }
        : { width: 0, height: 2 },
    shadowColor: colors.black,
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 4
  },
  buttonTextStyle: {
    fontSize: 18,
    paddingTop: 17,
    paddingBottom: 17,
    letterSpacing: 1,
    alignItems: "center"
  },
  secondButtonTextStyle: {
    fontSize: 18,
    padding: 15
  },
  equalWidthButtonsWrapper: {
    width: "100%",
    paddingLeft: "8%",
    paddingRight: "8%"
  },
  boxShadow: {
    flexDirection: "row",
    alignItems: "center"
  },
  equalWidthButton1: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  equalWidthButton2: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  doubleTextButtonContainer: {
    flexDirection: "row"
  },
  primaryTextContainer: {
    width: "50%",
    alignItems: "center"
  },
  secondaryTextContainer: {
    width: "50%",
    alignItems: "center"
  },
  secondButtonImageStyle: {
    width: "100%",
    alignItems: "center"
  },
  btnImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});
