import React, { useState } from "react";
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
import { textos } from "../../constants";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("xrodrigoresendex@gmail.com");
  const [password, setPassword] = useState("123456");

  async function handleLogin() {
    email == "" || password == ""
      ? Alert.alert("Insira os dados e tente novamente")
      : navigation.navigate("Bottom");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.viewLogo}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.Logo}
          />
        </View>

        <View>
          <View style={styles.viewInput}>
            <TextInput
              placeholder={textos.email}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
            <TextInput
              placeholder={textos.senha}
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(pass) => setPassword(pass)}
              value={password}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLogin()}
            >
              <Text style={styles.TextButton}>{textos.entrar}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.registerView}>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.cadastrar}>{textos.cadastrar}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.recuperar}>{textos.recuperar}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
