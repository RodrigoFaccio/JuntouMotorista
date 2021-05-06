import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import styles from "./styles";
import { useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

const Home = ({ navigation }) => {
 const [data,setData] = useState({});
 const url = 'http://192.168.1.106:3005';
 useFocusEffect(
  React.useCallback(() => {
    async function viagens(){
      const response = await axios.get(url+'/trip/lista');
      setData(response.data);
      console.log(data);
    }
    viagens();

  }, [])
);





  function renderItem({ item, index }) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Embark", item)}>
        <View style={styles.cardView}>
          <Text style={styles.cardText} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.cardText} numberOfLines={2}>
            {item.time}
          </Text>
        </View>
        <View style={{height:5}}/>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View>
        <FlatList
          bounces
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Home;
