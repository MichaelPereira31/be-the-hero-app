import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import CasosItem from '../../components/CasosItem';


export default function TabTwoScreen() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );
  return (
    <View style={styles.container}>
    <PageHeader title="Casos Favoritos" />

    <ScrollView
      style={styles.CasesList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      {favorites.map((teacher) => {
        return (
          <CasosItem
            key={teacher.id}
            teacher={teacher}
            favorited
          />
        );
      })}
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7'
  },

  CasesList: {
    marginTop: -40,
  },
});
