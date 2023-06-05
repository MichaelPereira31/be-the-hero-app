import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type TPageHeader = {
  title?: string;
  headerRight?: any;
  children?: any;
  bgColor?: string;
}

export default function PageHeader({ title, headerRight, children, bgColor = '#dda640' }: TPageHeader) {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.topBar}>
      </View>

      <View style={styles.header}>
        {title && (
          <Text style={styles.title}>{title}</Text>
        )}
        {headerRight}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
});
