import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import CustomButton from "../CustomButton";

import performCreate from "../../services/create/create";
import { useFormik } from "formik";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik;

  const handleRegister = async () => {
    const { data } = await performCreate({ name, email, password });
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

      <Text>Sobrenome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={name}
        onChangeText={setName}
      />

      <Text>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton
        title="Registrar-se"
        onPress={handleRegister}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
    marginTop: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    paddingLeft: 10,
  },
  button: {
    marginTop: 16,
  },
});

export default RegisterForm;
