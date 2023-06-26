// components/LoginScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import auth from "@react-native-firebase/auth";
import {
  WebStyles,
  MobileStyles,
  styles,
} from "../styles/LoginScreen/LoginStyles";

const LoginScreen = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };
  const PF = Platform.OS === "web" ? true : false;

  return (
    
    <View style={PF === true ? WebStyles.container : MobileStyles.container}>
      <Text style={styles.logo}>
        <Text style={styles.social_text}>Social</Text> SHOP
      </Text>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={PF === true ? WebStyles.input : MobileStyles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={PF === true ? WebStyles.input : MobileStyles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity
        style={PF === true ? WebStyles.button : MobileStyles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
