import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import heartOutlineIcon from "./icons/heart-outline.png";
import unfavoriteIcon from "./icons/unfavorite.png";
import whatsappIcon from "./icons/whatsapp.png";
import { useNavigation } from '@react-navigation/native';

export type TCases = {
  id: string;
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  cost: string;
}

type TCaseProps = {
  casos: TCases;
  favorited: any;
};

export default function CasosItem({ casos, favorited }: TCaseProps) {
  const navigation = useNavigation()
  const [isFavorited, setIsFavorited] = useState(favorited);

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((casosItem: TCases) => {
        return casosItem.id === casos.id;
      });
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(casos);
      setIsFavorited(true);
    }

    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: casos.avatar }} />
      </View>
      <Text style={styles.name}>{casos.name}</Text>
      <Text style={styles.subject}>{casos.subject}</Text>
      <Text style={styles.bio}>{casos.bio}</Text>

      <View style={styles.footer}>
        <RectButton
          style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          onPress={handleToggleFavorite}
        >
          {isFavorited ? (
            <Image source={unfavoriteIcon} />
          ) : (
            <Image source={heartOutlineIcon} />
          )}
        </RectButton>

        <RectButton style={styles.contactButton} onPress={() => navigation.navigate('CompleteRegistration')}>
          <Image source={whatsappIcon} />
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
