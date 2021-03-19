import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import Slider from "@react-native-community/slider";
import { textos, color } from "../../../constants";
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import ItemRender from '../../renderItem';


const Embark = ({ navigation, route }) => {
 const url = 'http://192.168.0.101:3005';
 const dadosViagem = route.params;

  const [number, setNumber] = useState(100);
  const [checked, setChecked] = useState(true);
  const [data,setData] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      async function viagens(){
        const response = await axios.get(url+`/viagens/motoristas/${dadosViagem.id}/lista`);
        setData(response.data);
        console.log(data);
      }
      viagens();
  
    }, [])
  );

  const item = route.params;

  return (
    <View style={styles.container}>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>{item.nome}</Text>
        <Text style={styles.infoText}>R$20,00</Text>
      </View>

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
      </View>
      {data.map((item)=>(
        <ItemRender item={item}/>
       ))}

<TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Debarkation")}
        >
          <Text style={styles.TextButton}>{textos.desembarque}</Text>
        </TouchableOpacity>

        <View style={{ height: 50 }} />
    </View>
  );
};

export default Embark;
