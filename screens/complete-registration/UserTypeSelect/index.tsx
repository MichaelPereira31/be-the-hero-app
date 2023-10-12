import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import maos from "@/assets/images/maos.png";
import escola from "@/assets/images/escola.png";
import { IUserType } from "@/services/user/create";

interface UserTypeSelectProps {
  value: IUserType;
  onChange: (value: IUserType) => void;
}

const UserTypeSelect = (props: UserTypeSelectProps) => {
  return (
    <>
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
          <Text style={styles.txt}>ONG</Text>
        </RectButton>
      </View>
    </>
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
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },

  buttonContainer: {
    alignItems: "center",
  },

  button: {
    width: "100%",
    minHeight: 261,
    backgroundColor: "#fff",
    marginBottom: 20,
    alignItems: "center",
    padding: 48,
    borderRadius: 20,
    elevation: 4,
  },

  image: {
    width: 130,
    height: 130,
  },

  txt: {
    marginTop: 10,
    fontSize: 22,
  },
});

export default UserTypeSelect;
