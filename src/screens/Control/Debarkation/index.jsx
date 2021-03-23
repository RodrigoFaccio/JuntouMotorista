import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { textos, color } from "../../../constants";

const Debarkation = ({ navigation, route }) => {
  const [number, setNumber] = useState(100);

  return (
    <View style={styles.container}>

      <View style={styles.viewSlider}>
        <Text style={styles.numberText}>{number}%</Text>
        <Slider
          step={1}
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={color.button}
          maximumTrackTintColor={color.black}
          thumbTintColor={color.button}
          onValueChange={(number) => setNumber(number)}
          value={number}
        />

        <Text style={styles.valorText}>R$20.00</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Finalization")}>
          <View style={styles.cardView}>
            <Text style={styles.cardText} numberOfLines={1}>
              Praça do Mineiro - Centro
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <View>
                  <View>
                    <Text style={styles.cardText} numberOfLines={2}>
                      Gabriel Luciano Silva - R$5,00
                    </Text>
                  </View>
                  
                </View>
              </View>
              <View>
                <Feather
                  name="arrow-right"
                  color={color.button}
                  size={25}
                  style={{ marginRight: 15 }}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>

        

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.TextButton}>{textos.finalizar}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Debarkation;
