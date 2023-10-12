import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Alert } from "react-native";
import LoadingButton from "@/components/Buttons/LoadingButton";

import createUser, { ICreateUserPayload } from "@/services/user/create";
import { useFormik } from "formik";

interface RegisterFormProps {
  jumpTo: (key: string) => void;
}

const RegisterForm = (props: RegisterFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: ICreateUserPayload) => {
    setIsLoading(true);

    createUser(values)
      .then(() =>
        Alert.alert("Parabéns, você está cadastrado! 😁✨", "", [
          { text: "Continuar", onPress: () => props.jumpTo("loginForm") },
        ])
      )
      .catch(() =>
        alert("Ops, problemas ao cadastrar. Tente novamente mais tarde! 🫠")
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const formik = useFormik<ICreateUserPayload>({
    initialValues: {
      name: "",
      lastName: "",
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
        onChangeText={(value: string) => formik.setFieldValue("name", value)}
      />

      <Text>Sobrenome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={formik.values.lastName}
        onChangeText={(value: string) =>
          formik.setFieldValue("lastName", value)
        }
      />

      <Text>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formik.values.email}
        onChangeText={(value: string) => formik.setFieldValue("email", value)}
      />

      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={formik.values.password}
        onChangeText={(value: string) =>
          formik.setFieldValue("password", value)
        }
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
