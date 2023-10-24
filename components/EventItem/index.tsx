import React from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text } from "react-native";

export type TCases = {
  id: string;
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  cost: string;
};

type TCaseProps = {
  event: TCases;
};

export default function EventItem({ event }: TCaseProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: event.avatar }} />
      </View>
      <Text style={styles.name}>{event.name}</Text>
      <Text style={styles.subject}>{event.subject}</Text>
      <Text style={styles.bio}>{event.bio}</Text>
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
    elevation: 4,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 300,
    height: 182,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
    backgroundColor: "#eee",
  },

  name: {
    color: "#000",
    fontSize: 20,
  },

  subject: {
    color: "#6a6180",
    fontSize: 14,
    marginTop: 2,
  },

  bio: {
    marginTop: 10,
    fontSize: 12,
    color: "#000",
  },

  footer: {
    color: "#fafafc",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: 24,
    flexDirection: "row",
  },

  favoriteButton: {
    backgroundColor: "#F5B234",
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },

  favorited: {
    backgroundColor: "#e33d3d",
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

  contactButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 16,
  },
});
