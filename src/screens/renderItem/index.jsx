import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import Slider from "@react-native-community/slider";
import { textos, color } from "../../constants";
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';


const ItemRender = ({ item,navigation}) => {
 const url = 'http://192.168.1.106:3005';
 const [infosTrip,setInfoTrip] = useState();
  
 const [checked,setChecked] = useState(item.checked=="true"?true:false);

 async function infoTrip(item){
    const {data} = await axios.get(url+`/trip/${item.id_trip}/listInfosTrip`);
   setInfoTrip(data);
  }
  infoTrip(item);

  return (
    
      
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
                    <CheckBox
                      title={item.name}
                      checked={!checked}
                      onPress={() => setChecked(!checked)}
                      checkedColor={color.button}
                      containerStyle={{
                        backgroundColor: "#fff",
                        borderColor: "transparent",
                        height: 43,
                      }}
                    />
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

  );
};

export default ItemRender;
