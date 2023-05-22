import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

import heartOutlineIcon from './icons/heart-outline.png';
import unfavoriteIcon from './icons/unfavorite.png';
import whatsappIcon from './icons/whatsapp.png';


export default function CasosItem({ teacher: casos, favorited }) {
    const [isFavorited, setIsFavorited] = useState(favorited);

    /*function handleLinkToWhatsapp() {
      api.post('connections', {
        user_id: teacher.id,
      });
      Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
    }*/
  
    async function handleToggleFavorite() {
      const favorites = await AsyncStorage.getItem('favorites');
      let favoritesArray = [];
  
      if (favorites) {
        favoritesArray = JSON.parse(favorites);
      }
  
      if (isFavorited) {
        const favoriteIndex = favoritesArray.findIndex((casosItem) => {
          return casosItem.id === casos.id;
        });
        favoritesArray.splice(favoriteIndex, 1);
        setIsFavorited(false);
      } else {
        favoritesArray.push(casos);
        setIsFavorited(true);
      }
  
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }
  
    return (
    <View style={styles.container}>
    <View style={styles.profile}>
      <Image
        style={styles.avatar}
        source={{ uri: casos.avatar }}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>{casos.name}</Text>
        <Text style={styles.subject}>{casos.subject}</Text>
      </View>
    </View>
    <Text style={styles.bio}>
      {casos.bio}
    </Text>

    <View style={styles.footer}>
      <Text style={styles.price}>
        Preço {'   '}
        <Text style={styles.priceValue}>R$ {casos.cost}</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          style={[
            styles.favoriteButton,
            isFavorited ? styles.favorited : {}
          ]}
          onPress={handleToggleFavorite}
        >
          {isFavorited
            ? <Image source={unfavoriteIcon} />
            : <Image source={heartOutlineIcon} />
          }
        </RectButton>

        <RectButton  style={styles.contactButton}>
          <Image source={whatsappIcon} />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e6e6f0',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eee',
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    color: '#32264d',
    fontSize: 20,
  },

  subject: {
    fontFamily: 'Poppins_400Regular',
    color: '#6a6180',
    fontSize: 12,
    marginTop: 4,
  },

  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 24,
    color: '#646180'
  },

  footer: {
    color: '#fafafc',
    padding: 24,
    alignItems: 'center',
    marginTop: 24,
  },

  price: {
    color: '#6a6180',
    fontSize: 14,
  },

  priceValue: {
    color: '#F5B234',
    fontSize: 16,
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  favoriteButton: {
    backgroundColor: '#F5B234',
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  favorited: {
    backgroundColor: '#e33d3d',
  },

  contactButton: {
    backgroundColor: '#04d361',
    flex: 1,
    height: 56,
    flexDirection: 'row',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 16,
  },
});
