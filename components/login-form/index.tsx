import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Alert, Text } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";

import LoadingButton from "@/components/Buttons/LoadingButton";
import login, { ILoginPayload } from "@/services/auth/login";
import useAuthentication from "@/hooks/useAuthentication";
import { useRouter } from "expo-router";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setToken } = useAuthentication();
  const { push } = useRouter();

  const handleLogin = async (values: ILoginPayload) => {
    if (formik.isValid) {
      setIsLoading(true);
      push("/complete-registration");

      login(values)
        .then(({ data }) => {
          setToken({ token: data?.data?.token, refreshToken: "" });

          if (!data?.data?.isComplete)
            Alert.alert(
              "Ops, você é novo aqui? 🤔",
              "Para ingressar no sistema, voce antes precisa completar seu cadastro. 🫶🏻"
            );
          push(data?.data?.isComplete ? "/home" : "/complete-registration");
        })
        .catch(() => alert("Credenciais inválidas. 😢"))
        .finally(() => setTimeout(() => setIsLoading(false), 2000));
    }
  };

  const formik = useFormik<ILoginPayload>({
    initialValues: { email: "", password: "" },
    onSubmit: handleLogin,
  });

  return (
    <View style={styles.container}>
      <Text>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formik.values.email}
        onChangeText={(email: string) => formik.setFieldValue("email", email)}
      />
      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={formik.values.password}
        onChangeText={(password: string) =>
          formik.setFieldValue("password", password)
        }
      />
      <LoadingButton
        title="Login"
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
    padding: 16,
    marginTop: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    paddingLeft: 10,
  },
  button: {
    borderRadius: 20,
    marginTop: 16,
  },
});

export default LoginForm;
