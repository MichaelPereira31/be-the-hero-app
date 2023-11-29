import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { handleCategory, handleChangeColor } from "./utils";
import { IEvent } from "@/services/events/getEvents";

import whatsappIcon from "@/assets/images/whatsapp.png";

type TEventProps = {
  event: IEvent;
  setEventID: (value: string) => void;
  eventModal: boolean;
  setEventModal: (value: boolean) => void;
};

export default function EventItem({
  event,
  setEventID,
  eventModal,
  setEventModal,
}: TEventProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        setEventID(event.id);
        setEventModal(!eventModal);
      }}
    >
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image style={styles.avatar} source={{ uri: event.avatar }} />
          <View
            style={[
              styles.category,
              { backgroundColor: handleChangeColor(event.category) },
            ]}
          >
            <Text>{handleCategory(event.category)}</Text>
          </View>
        </View>
        <Text style={styles.name}>{event.name}</Text>
        <Text style={styles.subject}>{event.subject}</Text>
        <Text style={styles.bio}>{event.description}</Text>

        <View style={styles.buttonContainer}>
          <RectButton style={styles.contactButton}>
            <Image style={styles.contactImage} source={whatsappIcon} />
          </RectButton>
        </View>
      </View>
    </TouchableOpacity>
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

  category: {
    position: "absolute",
    right: 10,
    top: 10,

    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 15,
  },

  name: {
    color: "#000",
    fontSize: 20,
  },

  subject: {
    color: "#6a6180",
    fontSize: 14,
    marginBottom: 10,
  },

  bio: {
    marginBottom: 20,
    fontSize: 12,
    color: "#000",
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
    marginRight: 8,
  },

  contactImage: {
    width: 24,
    height: 24,
  },
});
