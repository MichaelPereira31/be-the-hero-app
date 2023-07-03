import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'

import performCreate from '../../../services/create/create'

const RegisterScreen = () => {
  const navigation = useNavigation()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const { data } = await performCreate({name, email, password})
    navigation.navigate('')
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />

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
      <CustomButton title="Registrar-se" onPress={handleRegister} />
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
    marginBottom: 12,
    paddingLeft: 10,
  },
});

export default RegisterScreen;
