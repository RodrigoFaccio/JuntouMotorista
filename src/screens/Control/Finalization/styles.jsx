import React from "react";
import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: "center",
    alignItems: "center",
  },

  parabensText: {
    textAlign: "center",
    fontFamily: "risque",
    fontSize: 50,
    color: color.gray,
  },
  descText: {
    textAlign: "center",
    fontSize: 20,
    color: color.gray,
  },

  button: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: color.button,
    width: wp("90%"),
    height: 54,
    paddingHorizontal: 30,
    borderRadius: 50,
    color: color.gray,
    fontSize: 18,
    marginTop: hp("3%"),
  },
  TextButton: {
    textAlign: "center",
    fontSize: 22,
    color: color.white,
    fontFamily: "risque",
  },
});

export default styles;
