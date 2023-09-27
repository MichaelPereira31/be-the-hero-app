import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import logoMini from "../../assets/images/BTH-mini.png";
import maos from "../../assets/images/maos.png";
import escola from "../../assets/images/escola.png";

const SelectUser = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoMini} />
      <Text style={styles.title}>QUEM É VOCÊ?</Text>
      <View style={styles.buttonContainer}>
        <RectButton
          style={styles.buttonSelected}
        >
          <Image style={styles.imageSelected} source={maos} />
          <Text style={styles.txtSelected}>Voluntário</Text>
        </RectButton>
        <RectButton
          style={styles.button}
        >
          <Image style={styles.image} source={escola} />
          <Text style={styles.txt}>Instituição</Text>
        </RectButton>
      </View>
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

  logo: {
    width: 256,
    height: 109,
    marginBottom: 30,
  },
  
  title: {
    fontSize: 28,
    marginBottom: 20,
  },

  buttonContainer: {
    alignItems: "center",
  },

  buttonSelected: {
    width: 243,
    height: 261,
    backgroundColor: "#fff",
    marginBottom: 20,
    alignItems: "center",
    padding: 48,
    borderRadius: 20,
    elevation: 4,
  },

  imageSelected: {
    width: 145,
    height: 145,
  },

  txtSelected: {
    marginTop: 10,
    fontSize: 22,
  },

  button: {
    width: 176,
    height: 189,
    backgroundColor: "#aaa",
    alignItems: "center",
    padding: 37,
    borderRadius: 20,
    elevation: 4,
  },

  txt: {
    marginTop: 10,
    fontSize: 16,
  },

  image: {
    width: 100,
    height: 100,
  },
});

export default SelectUser;
