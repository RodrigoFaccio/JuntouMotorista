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
  },
  viewLogo: {
    marginTop: hp("6%"),
    alignSelf: "center",
  },
  Logo: {
    width: wp("55%"),
    height: 60,
  },
  cardView: {
    marginTop: hp("2%"),
    width: wp("90%"),
    height: 100,
    borderRadius: 12,
    backgroundColor: color.white,
    alignSelf: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  cardText: {
    textAlign: "center",
    fontFamily: "risque",
    fontSize: 20,
    color: color.gray,
    marginTop: 5,
  },
});

export default styles;
