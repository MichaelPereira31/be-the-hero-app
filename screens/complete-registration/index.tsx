import React, { useEffect, useMemo, useState } from "react";
import { View, Image, StyleSheet, Text, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoMini from "@/assets/images/BTH-mini.png";

import LoadingButton from "@/components/Buttons/LoadingButton";
import { ScrollView } from "react-native-gesture-handler";
import { useFormik } from "formik";
import createAddress, {
  ICreateAddressPayload,
} from "@/services/address/create";
import { ICreateUserPayload } from "@/services/user/create";
import { getDefaultValue, getOngFieldsList, getUserFieldsList } from "./helper";
import createOng, { ICreateOngPayload } from "@/services/ong/create";
import UserTypeSelect from "./UserTypeSelect";
import { useRouter } from "expo-router";

export type ICompleteRegistrationForm = ICreateOngPayload &
  ICreateAddressPayload &
  Pick<ICreateUserPayload, "type">;

export type ICompleteRegistrationField = keyof ICompleteRegistrationForm;

const CompleteRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState(getUserFieldsList());
  const { push } = useRouter();

  const getIsValid = () =>
    // only ong types will be able to be created
    Object.keys(formik.values).reduce(
      (prev, current) =>
        prev && !!formik.values[current as ICompleteRegistrationField],
      true
    );

  const handleNextOrSubmit = () => {
    const isValid = getIsValid(); // change this to be a yup validation
    if (isValid) return formik.handleSubmit();

    if (!isOngForm && isOngUser) setFields(getOngFieldsList());
    else setFields(getUserFieldsList());
  };

  const handleGoBack = () => {
    if (isOngForm) return setFields(getUserFieldsList());
    formik.setFieldValue("type", undefined);
  };

  const handleSubmit = async (values: ICompleteRegistrationForm) => {
    setIsLoading(true);
    const promises = [
      createAddress({
        city: values.city,
        complement: values.complement,
        neighborhood: values.neighborhood,
        number: values.number,
        reference: values.reference,
        street: values.street,
      }),
    ];

    if (isOngUser)
      promises.push(
        createOng({
          description: values.description,
          objective: values.objective,
          mainPhone: values.mainPhone,
          secondaryPhone: values.secondaryPhone,
          mainEmail: values.mainEmail,
          secondaryEmail: values.secondaryEmail,
        })
      );

    await Promise.all(promises)
      .then(() => {
        Alert.alert(
          "Cadastro atualizado com successo! 😄",
          "Agora você pode trafegar por nosso aplicativo livremente. Aproveite!! ✨",
          [{ text: "Continuar", onPress: () => push("/home") }]
        );
      })
      .catch(() =>
        Alert.alert(
          "Problemas ao concluir cadastro. ❌",
          "Para mais informações, contate o suporte. ☹️"
        )
      )
      .finally(() => setIsLoading(false));
  };

  const handleInputChange = (
    field: ICompleteRegistrationField,
    text: string
  ) => {
    formik.setFieldValue(field, text);
  };

  const formik = useFormik<ICompleteRegistrationForm>({
    initialValues: getDefaultValue(),
    onSubmit: handleSubmit,
  });

  const isOngUser = formik.values.type === "ong";
  const isOngForm = fields[0].name === "mainPhone";
  const isTypeSelected = !!formik.values.type;

  if (!isTypeSelected)
    return (
      <UserTypeSelect
        value={formik.values.type}
        onChange={(value) => formik.setFieldValue("type", value)}
      />
    );

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoMini} />
      <ScrollView style={styles.scroll} automaticallyAdjustKeyboardInsets>
        <View style={styles.card}>
          <Text style={styles.title}>
            {isOngForm ? "Informações da Ong" : "Informações de Endereço"}
          </Text>

          {fields.map((field) => (
            <View key={field.name}>
              <Text>{field.label}</Text>
              <TextInput
                style={
                  field.type === "textarea" ? styles.textarea : styles.input
                }
                placeholder={field.placeholder}
                value={formik.values[field.name] ?? ""}
                onChangeText={(text) => handleInputChange(field.name, text)}
                multiline={field.type === "textarea"}
                numberOfLines={field.type === "textarea" ? 4 : undefined}
              />
            </View>
          ))}

          <View style={styles.buttonContainer}>
            <LoadingButton
              onPress={handleNextOrSubmit}
              title={!isOngForm && isOngUser ? "PRÓXIMO" : "SALVAR"}
              bgColor="#0FF126"
              isLoading={isLoading}
              style={styles.button}
            />

            <LoadingButton
              onPress={handleGoBack}
              title="VOLTAR"
              bgColor="gray"
              disabled={isLoading}
              style={styles.button}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#f0f0f7",
  },

  scroll: {
    flex: 1,
    width: "100%",
  },

  logo: {
    width: 256,
    height: 109,
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 20,
    textAlign: "center",
  },

  card: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    elevation: 4,
    padding: 20,
    borderRadius: 19,
    marginBottom: 20,
  },

  input: {
    width: "100%",
    minHeight: 40,
    height: "auto",
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 2,
    marginBottom: 16,
    paddingLeft: 10,
  },

  textarea: {
    width: "100%",
    minHeight: 80,
    height: "auto",
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 2,
    marginBottom: 16,
    paddingLeft: 10,
  },

  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    gap: 10,
    flexDirection: "row",
  },

  button: {
    width: "50%",
  },
});

export default CompleteRegistration;
