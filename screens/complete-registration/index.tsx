import React, { useState } from "react";
import { View, Image, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoMini from "../assets/images/BTH-mini.png";

import CustomButton from "../../components/CustomButton";
import { ScrollView } from "react-native-gesture-handler";

interface FormData {
  fullName: string;
  username: string;
  document: string;
  email: string;
  phone: string;
}

const CompleteRegistration = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    username: "",
    document: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (field: keyof FormData, text: string) => {
    setFormData({
      ...formData,
      [field]: text,
    });
  };

  const handleSubmit = () => {
    // Aqui você pode enviar os dados do formulário para o servidor ou fazer o que desejar
    console.log("Dados do formulário:", formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoMini} />
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
          <Text>Nome Completo:</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={formData.fullName}
            onChangeText={(text) => handleInputChange("fullName", text)}
          />
          <Text>Usuário:</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={formData.username}
            onChangeText={(text) => handleInputChange("username", text)}
          />
          <Text>Documento:</Text>
          <TextInput
            style={styles.input}
            placeholder="Documento"
            value={formData.document}
            onChangeText={(text) => handleInputChange("document", text)}
          />
          <Text>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />
          <Text>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={formData.phone}
            onChangeText={(text) => handleInputChange("phone", text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={handleSubmit}
            title="SALVAR"
            bgColor="#0FF126"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#f0f0f7",
  },

  scroll: {
    flex: 1,
    width: "100%",
  },

  logo: {
    width: 256,
    height: 109,
    marginBottom: 30,
  },

  card: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    elevation: 4,
    padding: 20,
    borderRadius: 19,
    marginBottom: 20,
  },

  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 2,
    marginBottom: 16,
    paddingLeft: 10,
  },

  buttonContainer: {
    width: "100%",
    alignItems: "flex-end",
  }
});

export default CompleteRegistration;
