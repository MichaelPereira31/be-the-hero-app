import React, { useState } from "react";
import { useFormik } from "formik";
import { Text } from "react-native";
import { View, TextInput, StyleSheet } from "react-native";

import CustomButton from "@/components/CustomButton";
import login, { ILoginPayload } from "@/services/auth/login";
import useAuthentication from "@/hooks/useAuthentication";
import { useRouter } from "expo-router";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setToken } = useAuthentication();
  const { replace } = useRouter();

  const handleLogin = async (values: ILoginPayload) => {
    setIsLoading(true);

    if (formik.isValid) {
      login(values)
        .then((response) => {
          setToken({ token: response.data, refreshToken: "" });
          replace("/index");
        })
        .finally(() => setIsLoading(false));
    }

    setIsLoading(false);
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
      <CustomButton
        title="Login"
        onPress={formik.handleSubmit}
        style={styles.button}
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
