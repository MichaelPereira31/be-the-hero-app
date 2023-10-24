import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useFormik } from "formik";
import { Alert, Text, View, StyleSheet } from "react-native";

import LoadingButton from "@/components/Buttons/LoadingButton";
import login, { ILoginPayload } from "@/services/auth/login";
import useAuthentication from "@/hooks/useAuthentication";
import { LoginSchema } from "./schema";
import TextInput from "../Fields/TextInput";
import useCache from "@/hooks/useCache";

export const USER_BASE_FIELDS_KEY = "@user/base-fields";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { setToken } = useAuthentication();
  const { setCachedValue } = useCache(USER_BASE_FIELDS_KEY);
  const { push } = useRouter();

  const handleLogin = async (values: ILoginPayload) => {
    if (formik.isValid) {
      setIsLoading(true);

      login(values)
        .then(({ data }) => {
          setToken({ token: data?.data?.token, refreshToken: "" });
          setCachedValue({
            type: data.data.type,
            userId: data.data.userId,
            isComplete: data.data.isComplete,
          });

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
    validationSchema: LoginSchema,
    validateOnChange: true,
    validateOnMount: false,
  });

  return (
    <View style={styles.container}>
      <TextInput
        label="Email:"
        value={formik.values.email}
        setValue={(email: string) => formik.setFieldValue("email", email)}
        error={formik.errors.email}
        isTouched={formik.touched.email && formik.dirty}
      />

      <TextInput
        label="Senha:"
        value={formik.values.password}
        setValue={(password: string) => {
          formik.setFieldValue("password", password);
        }}
        error={formik.errors.password}
        secureTextEntry
        isTouched={formik.touched.password}
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
  button: {
    borderRadius: 20,
    marginTop: 16,
  },
});

export default LoginForm;
