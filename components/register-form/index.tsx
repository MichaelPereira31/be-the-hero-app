import { useFormik } from "formik";
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import LoadingButton from "@/components/Buttons/LoadingButton";
import createUser, { ICreateUserPayload } from "@/services/user/create";
import TextInput from "../Fields/TextInput";
import { RegisterSchema } from "./schema";

interface RegisterFormProps {
  jumpTo: (key: string) => void;
}

const RegisterForm = (props: RegisterFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: ICreateUserPayload) => {
    setIsLoading(true);

    createUser(values)
      .then(() => {
        Alert.alert("Parabéns, você está cadastrado! 😁✨", "", [
          { text: "Continuar", onPress: () => props.jumpTo("loginForm") },
        ]);
        formik.resetForm();
      })
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
    validationSchema: RegisterSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
  });

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome:"
        value={formik.values.name}
        setValue={(value: string) => formik.setFieldValue("name", value)}
        error={formik.errors.name}
      />

      <TextInput
        label="Sobrenome:"
        value={formik.values.lastName}
        setValue={(value: string) => formik.setFieldValue("lastName", value)}
        error={formik.errors.lastName}
      />

      <TextInput
        label="Email:"
        value={formik.values.email}
        setValue={(value: string) => formik.setFieldValue("email", value)}
        error={formik.errors.email}
      />

      <TextInput
        label="Senha:"
        value={formik.values.password}
        setValue={(value: string) => formik.setFieldValue("password", value)}
        error={formik.errors.password}
        secureTextEntry
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
