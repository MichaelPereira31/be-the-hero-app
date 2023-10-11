import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import LoadingButton from "@/components/Buttons/LoadingButton";

import createUser, { ICreateUserPayload } from "@/services/auth/create";
import { useFormik } from "formik";

interface RegisterFormProps {
  jumpTo: (key: string) => void;
}

const RegisterForm = (props: RegisterFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: ICreateUserPayload) => {
    setIsLoading(false);

    createUser(values)
      .then(() => {
        alert("Parabéns, você está cadastrado. 😁");
        props.jumpTo("loginForm");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (name: string) => {
    return (value: string) => formik.setFieldValue(name, value);
  };

  const formik = useFormik<ICreateUserPayload>({
    initialValues: {
      name: "",
      sobrenome: "",
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={formik.values.name}
        onChangeText={handleChange("nome")}
      />

      <Text>Sobrenome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={formik.values.sobrenome}
        onChangeText={handleChange("sobrenome")}
      />

      <Text>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formik.values.email}
        onChangeText={handleChange("email")}
      />

      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={formik.values.password}
        onChangeText={handleChange("password")}
      />
      <LoadingButton
        title="Registrar-se"
        onPress={formik.handleSubmit}
        style={styles.button}
        isLoading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 16,
    marginTop: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    paddingLeft: 10,
  },
  button: {
    marginTop: 16,
  },
});

export default RegisterForm;
