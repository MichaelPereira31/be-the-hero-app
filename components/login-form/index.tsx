import React, { useState } from 'react';
import { Text } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native';

import CustomButton from '../CustomButton';
import { setToken } from '../../services'
import auth from '../../utils/auth'
import performLogin from '../../services/auth/login'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    const { data } = await performLogin(email)
      auth.access_token = data.auth.access_token
      auth.refresh_token = data.auth.refresh_token
      setToken(auth.access_token)
  };

  return (
    <View style={styles.container}>
      <Text>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <CustomButton title="Login" onPress={handleLogin} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 16
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingLeft: 10,
  },
  button: {
    borderRadius: 20,
    marginTop: 16
  }
});

export default LoginForm;