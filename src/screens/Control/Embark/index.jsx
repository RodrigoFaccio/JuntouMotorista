import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import Slider from "@react-native-community/slider";
import { textos, color } from "../../../constants";
import { useFocusEffect } from '@react-navigation/native';
import ItemRender from '../../renderItem';
import api from "../../../api";


const Embark = ({ navigation, route }) => {
 const dadosViagem = route.params;


  const [number, setNumber] = useState(100);
  const [checked, setChecked] = useState(true);
  const [data,setData] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      async function viagens(){
        const {data} = await api.get(`/trip/${dadosViagem.id}/listPassenger`);
        setData(data);
        console.log(data);
      }
      viagens();
  
    }, [])
  );


  return (
    <View style={styles.container}>

      <View style={styles.infoView}>
        <Text style={styles.infoText}>{dadosViagem.name}</Text>
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
      <ScrollView>
      {data.map((item)=>(
        <ItemRender item={item} key={item.id}  navigation={navigation}/>
       ))}
</ScrollView>
<TouchableOpacity
          style={styles.button}
          onPress={() =>navigation.navigate("Disembark",dadosViagem)}
        >
          <Text style={styles.TextButton}>{textos.desembarque}</Text>
        </TouchableOpacity>

        <View style={{ height: 50 }} />
    </View>
  );
};

export default Embark;
