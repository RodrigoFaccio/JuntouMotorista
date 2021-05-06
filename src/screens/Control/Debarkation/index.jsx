import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFocusEffect } from '@react-navigation/native';

import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { textos, color } from "../../../constants";
import axios from 'axios';
import { ScrollView } from "react-native-gesture-handler";

const Debarkation = ({ navigation, route }) => {
  const url = 'http://192.168.1.106:3005';
 const [infosTrip,setInfoTrip] = useState();


 const [id,setId] = useState();
 const dadosViagem = route.params;
 console.log(dadosViagem.id);


  const [number, setNumber] = useState(100);

  const [data,setData] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      async function viagens(){
        const {data} = await axios.get(url+`/trip/${dadosViagem.id}/listPassenger`);
        
        setData(data);
         console.log(data);
      }
      viagens();
  
    }, [])
  );
  async function infoTrip(item){
    const {data} = await axios.get(url+`/trip/${item}/listInfosTrip`);
    console.log(data);
   setInfoTrip(data);
  }
  infoTrip(dadosViagem.id);

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
      <ScrollView>

      <View>

        {data.map((item)=>(

         <TouchableOpacity >
         <View style={styles.cardView}>
           <Text style={styles.cardText} numberOfLines={1}>
             {infosTrip}
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
                     {item.name} - R$5,00
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

       ))}




       

        

        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("Finalization",dadosViagem)}}>
          <Text style={styles.TextButton}>{textos.finalizar}</Text>
        </TouchableOpacity>

      </View>
      </ScrollView>


    </View>
  );
};

export default Debarkation;
