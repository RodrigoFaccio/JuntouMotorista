import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { textos, color } from "../../../constants";

const Finalization = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.parabensText}>{textos.parabens}</Text>
        <Text style={styles.descText}>{textos.corrida}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Bottom")}
        >
          <Text style={styles.TextButton}>{textos.fazermais}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Finalization;
