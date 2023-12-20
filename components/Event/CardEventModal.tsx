import React from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text } from "react-native";

import whatsappIcon from "@/assets/images/whatsapp.png";
import { RectButton } from "react-native-gesture-handler";
import { IEvent } from "@/services/events/getEvents";
import { handleCategory, handleChangeColor } from "./utils";

type TEventProps = {
  event: IEvent | undefined;
};

export default function CardEventModal({ event }: TEventProps) {
  const hasEvent = !!event;

  console.log(event);

  return (
    <>
      {hasEvent ? (
        <View style={styles.container}>
          <View style={styles.profile}>
            <Image style={styles.avatar} source={{ uri: event.avatar }} />
          </View>
          <Text style={styles.name}>{event.name}</Text>
          <Text style={styles.subject}>{event.subject}</Text>
          <Text style={styles.bio}>{event.description}</Text>

          <Text style={styles.trace}></Text>

          <Text style={styles.infos}>Status: Ativo</Text>
          <Text style={styles.infos}>
            Tipo: {handleCategory(event.category)}
          </Text>
          <Text style={styles.infos}>Data: 15/02/2024</Text>
          <Text style={styles.infos}>Hora: 15:40</Text>
          <Text style={styles.infos}>
            Observação: Ser respeitoso com os demais.
          </Text>

          <View style={styles.buttonContainer}>
            <RectButton style={styles.contactButton}>
              <Image style={styles.contactImage} source={whatsappIcon} />
            </RectButton>
            <RectButton style={styles.registreButton}>
              <Text style={styles.registreText}>REGISTRAR-SE</Text>
            </RectButton>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    padding: 24,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    elevation: 4,
  },

  avatar: {
    width: "100%",
    height: 182,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
    backgroundColor: "#eee",

    position: "relative",
  },

  name: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
  },

  subject: {
    color: "#6a6180",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },

  bio: {
    marginBottom: 20,
    fontSize: 12,
    color: "#000",
    textAlign: "center",
  },

  infos: {
    marginBottom: 10,
    fontSize: 10,
    color: "#000",
  },

  trace: {
    marginBottom: 20,
    borderBottomColor: "#00",
    borderBottomWidth: 1,
  },

  buttonContainer: {
    color: "#fafafc",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },

  contactButton: {
    backgroundColor: "#04d361",
    width: 56,
    height: 56,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 8,
  },

  registreButton: {
    backgroundColor: "#F5B234",
    width: 140,
    height: 56,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 8,
  },

  registreText: {
    color: "#fff",
  },

  contactImage: {
    width: 24,
    height: 24,
  },
});
