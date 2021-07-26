import React, { useState, useEffect,useContext } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Text,
  StatusBar,
  Alert,
} from "react-native";
import styles from "./styles";
import { Feather, EvilIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as Permissions from "expo-permissions";
import AuthContext, { AuthProvider } from '../../../context/auth';
import api from "../../../api";

const Register = ({ navigation }) => {
  const { signed, user, signIn, loading,signOut } = useContext(AuthContext);
  const [name, setNome] = useState();
  const [userDetails, setUserDetails] = useState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [image, setImage] = useState("");

  async function handleRegister() {
    email == "" || password == ""
      ? Alert.alert("Insira os dados e tente novamente")
      : Alert.alert("show");
  }

  
 

  async function pickImage() {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (E) {
      console.log(E);
    }
  }
  useEffect(()=>{
		console.log('olaa')

	  async function userDetails(){
		const {data} = await api.get(`/motorista/${user.id}/datails`);

		setNome(data.name);
		setEmail(data.email);
		setWhatsapp(data.whatsapp);


		setUserDetails(data);

	  }
	  userDetails();
  },[])

  async function alterar(){
	  const {data} = await api.post(`/motorista/${user.id}/alteracao`,{name,email,whatsapp});

	  if(data==1)
	  	return alert('Alterado com sucesso')

	  

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        

        <View>
          <View style={styles.viewInput}>
            <TextInput
              placeholder="Nome"
              style={styles.input}
              onChangeText={(nome) => setNome(nome)}
              value={name}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />

            <TextInput
              placeholder="WhatsApp"
              style={styles.input}
              keyboardType="decimal-pad"
              autoCapitalize="none"
              onChangeText={(whatsapp) => setWhatsapp(whatsapp)}
              value={whatsapp}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => alterar()}
            >
              <Text style={styles.TextButton}>Atualizar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSair}
              onPress={()=>{signOut()}}
            >
              <Text style={styles.TextButton}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
