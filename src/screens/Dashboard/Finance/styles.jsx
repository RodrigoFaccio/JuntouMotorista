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
  todayView: {
    marginTop: hp("2%"),
    alignSelf: "center",
    justifyContent: "center",
  },
  todayText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
    color: color.gray,
  },
  valueView: {
    marginTop: hp("1%"),
    height: 45,
    width: 130,
    backgroundColor: color.button,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  valueText: {
    color: color.white,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  valueWeek: {
    marginTop: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("90%"),
    paddingLeft: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: color.gray,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  valueWeekText: {
    color: color.gray,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  infoValues: {
    marginTop: hp("1%"),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  valueViewRelatorio: {
    marginTop: hp("5%"),
    height: 56,
    width: 130,
    backgroundColor: color.button,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  valueMonth: {
    color: color.white,
    textAlign: "left",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default styles;
