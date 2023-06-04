import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

import LoginScreen from '../screens/credentials/loginScreen';
import RegisterScreen from '../screens/credentials/registerScreen';

import PageHeader from '../../components/PageHeader';

import logoMini from '../../assets/images/BTH-mini.png';

const renderScene = SceneMap({
  form1: LoginScreen,
  form2: RegisterScreen,
});

const renderTabBar = (props: any) => (
  <View style={styles.tabBar}>
    {props.navigationState.routes.map((route: any, index: any) => (
      <View
        key={index}
        style={[
          styles.tabItem,
          {
            borderBottomColor: props.navigationState.index === index ? '#dda640' : 'transparent',
            borderBottomRightRadius: props.navigationState.index === 1 ? 30 : 0,
            borderBottomLeftRadius: props.navigationState.index === 0 ? 30 : 0,
          },
        ]}
      >
        <Text
          style={styles.tabText}
          onPress={() => props.jumpTo(route.key)}
        >
          {route.title}
        </Text>
      </View>
    ))}
  </View>
);


const Credentials = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'form1', title: 'Login' },
    { key: 'form2', title: 'Registro' },
  ]);

  return (
    <View style={styles.container}>
      <PageHeader bgColor='white'>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={logoMini}
          />
        </View>
      </PageHeader>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 256,
    height: 109,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Credentials;
