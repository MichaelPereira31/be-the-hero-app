import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import PageHeader from "../../components/PageHeader";
import LoginForm from "../../components/login-form";
import RegisterForm from "../../components/register-form";

import logoMini from "../../assets/images/BTH-mini.png";

const scene = SceneMap({
  loginForm: LoginForm,
  registerForm: RegisterForm,
});

const DEFAULT_SCENE_ROUTES = [
  { key: "loginForm", title: "Entrar" },
  { key: "registerForm", title: "Registrar" },
];

const Login = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <PageHeader style={styles.pageHeader}>
        <View style={styles.header}>
          <Image style={styles.logo} source={logoMini} />
        </View>
      </PageHeader>
      <TabView
        navigationState={{ index, routes: DEFAULT_SCENE_ROUTES }}
        renderScene={scene}
        onIndexChange={setIndex}
        renderTabBar={TabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  pageHeader: {
    backgroundColor: "white",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 256,
    height: 109,
  },
});

export default Login;
