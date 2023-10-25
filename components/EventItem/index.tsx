import React from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text } from "react-native";

import whatsappIcon from "@/assets/images/whatsapp.png";
import { RectButton } from "react-native-gesture-handler";
import { IEvent } from "@/services/events/getEvents";
import { EventCategory } from "@/constants/Enums";

type TEventProps = {
  event: IEvent;
};

export default function EventItem({ event }: TEventProps) {
  const handleChangeColor = (type: string) => {
    switch (type) {
      case EventCategory.Donation:
        return "rgba(0, 255, 0, 0.5)";

      case EventCategory.Vacancy:
        return "rgba(255, 255, 0, 0.5)";

      default:
        return "rgba(0, 81, 255, 0.5)";
    }
  };

  const handleCategory = (category: string) => {
    switch (category) {
      case EventCategory.Donation:
        return "Doação";

      case EventCategory.Vacancy:
        return "Voluntário";

      default:
        return category;
    }
  };

  return (
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
