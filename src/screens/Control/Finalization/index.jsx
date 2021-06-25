import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { textos, color } from "../../../constants";
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import api from "../../../api";


const Finalization = ({ navigation,route }) => {

 const dadosViagem = route.params;
 console.log(dadosViagem.id)

  useFocusEffect(
    React.useCallback(() => {
      async function finalization(){
        const response = await api.get(`/trip/${dadosViagem.id}/2/finalization`);
        
      }
      finalization();
  
    }, [])
  );
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Text style={styles.parabensText}>{textos.parabéns}</Text>
        <Text style={styles.descText}>{textos.corrida}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.TextButton}>{textos.fazermais}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Finalization;
