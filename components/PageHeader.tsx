import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



export default function PageHeader({ title, headerRight, children }) {
    const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

    return (
    <View style={styles.container}>
    <View style={styles.topBar}>
    </View>

    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {headerRight}
    </View>
    {children}
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#dda640',
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
