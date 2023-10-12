import React, { useState } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import logoMini from "@/assets/images/BTH-mini.png";
import maos from "@/assets/images/maos.png";
import escola from "@/assets/images/escola.png";
import { IUserType } from "@/services/user/create";

interface UserTypeSelectProps {
  value: IUserType;
  onChange: (value: IUserType) => void;
}

const UserTypeSelect = (props: UserTypeSelectProps) => {
  const isVoluntarySelected = props.value === "voluntary";
  const isOngSelected = props.value === "ong";

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoMini} />
      <Text style={styles.title}>QUEM É VOCÊ?</Text>
      <View style={styles.buttonContainer}>
        <RectButton
          style={styles.button}
          onPress={() => props.onChange("voluntary")}
        >
          <Image style={styles.image} source={maos} />
          <Text style={styles.txt}>Voluntário</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={() => props.onChange("ong")}>
          <Image style={styles.image} source={escola} />
          <Text style={styles.txt}>Ong</Text>
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

  button: {
    width: 243,
    height: 261,
    backgroundColor: "#fff",
    marginBottom: 20,
    alignItems: "center",
    padding: 48,
    borderRadius: 20,
    elevation: 4,
  },

  image: {
    width: 145,
    height: 145,
  },

  txt: {
    marginTop: 10,
    fontSize: 22,
  },
});

export default UserTypeSelect;
