import React, { useState } from 'react';
import { Text } from 'react-native';
import { View, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../../../components/CustomButton';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticar o usuário com o email e senha fornecidos
    console.log('Email:', email);
    console.log('Password:', password);
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
      <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
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
  }
});

export default LoginScreen;