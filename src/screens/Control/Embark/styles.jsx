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
  header: {
    marginTop: hp("4%"),
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 30,
    color: color.button,
  },

  embarqueText: {
    fontFamily: "Roboto",
    fontSize: 40,
    color: color.gray,
  },
  iconConversation: {
    fontSize: 30,
    color: color.gray,
  },
  infoView: {
    alignSelf: "center",
    marginTop: hp("2%"),
    width: wp("90%"),
    borderWidth: 1,
    borderColor: color.gray,
    borderRadius: 12,
    padding: 8,
  },

  infoText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Roboto",
    color: color.gray,
    marginTop: 5,
  },

  viewSlider: {
    alignSelf: "center",
  },
  numberText: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Roboto",
    color: color.button,
    marginTop: hp("3%"),
  },
  slider: {
    width: wp("80%"),
    height: 50,
  },

  cardViewComplete: {
    marginTop: hp("2%"),
    width: wp("90%"),
    height: 120,
    borderRadius: 12,
    backgroundColor: color.button,
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
  cardTextComplete: {
    textAlign: "left",
    marginLeft: 20,
    fontFamily: "Roboto",
    fontSize: 20,
    color: color.white,
    marginTop: 5,
  },

  cardView: {
    marginTop: hp("2%"),
    width: wp("90%"),
    height: 125,
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
    textAlign: "left",
    marginLeft: 20,
    fontFamily: "Roboto",
    fontSize: 20,
    color: color.gray,
    marginTop: 5,
  },
  gpsText: {
    marginTop: hp("2%"),
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 40,
    color: color.white,
    textTransform: "uppercase",
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
    fontFamily: "Roboto",
  },
});

export default styles;
