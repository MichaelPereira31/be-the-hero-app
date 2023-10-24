import React, { useState } from "react";
import { View, Image, StyleSheet, Text, Alert } from "react-native";
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
import useAuthentication from "@/hooks/useAuthentication";
import TextInput from "@/components/Fields/TextInput";
import { AddressSchema, OngSchema } from "./schema";

export type ICompleteRegistrationForm = ICreateOngPayload &
  ICreateAddressPayload &
  Pick<ICreateUserPayload, "type">;

export type ICompleteRegistrationField = keyof ICompleteRegistrationForm;

const CompleteRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState(getUserFieldsList());
  const [schema, setSchema] = useState(AddressSchema);

  const { push } = useRouter();
  const { extraHeaders } = useAuthentication();

  const ongFieldList = getOngFieldsList();
  const addressFieldList = getUserFieldsList();

  const handleNextOrSubmit = () => {
    if (!isOngForm && isOngUser) return setFields(ongFieldList);
    if (formik.isValid) return formik.handleSubmit();
  };

  const handleGoBack = () => {
    if (isOngForm) return setFields(addressFieldList);
    formik.setFieldValue("type", undefined);
  };

  const handleSubmit = async (values: ICompleteRegistrationForm) => {
    setIsLoading(true);
    const promises = [
      createAddress(
        {
          city: values.city,
          complement: values.complement,
          neighborhood: values.neighborhood,
          number: values.number,
          reference: values.reference,
          street: values.street,
          state: values.state,
        },
        extraHeaders
      ),
    ];

    if (isOngUser)
      promises.push(
        createOng(
          {
            name: values.name,
            description: values.description,
            objective: values.objective,
            mainPhone: values.mainPhone,
            secondaryPhone: values.secondaryPhone,
            mainEmail: values.mainEmail,
            secondaryEmail: values.secondaryEmail,
          },
          extraHeaders
        )
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
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
    enableReinitialize: true,
  });

  const isOngUser = formik.values.type === "ong";
  const isOngForm = fields[0].name === ongFieldList[0].name;
  const isTypeSelected = !!formik.values.type;

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logoMini} />
      {isTypeSelected ? (
        <ScrollView style={styles.scroll} automaticallyAdjustKeyboardInsets>
          <View style={styles.card}>
            <Text style={styles.title}>
              {isOngForm ? "Informações da Ong" : "Informações de Endereço"}
            </Text>

            {fields.map((field) => (
              <TextInput
                key={field.name}
                label={field.label}
                style={
                  field.type === "textarea" ? styles.textarea : styles.input
                }
                placeholder={field.placeholder}
                value={formik.values[field.name] ?? ""}
                setValue={(value: string) =>
                  handleInputChange(field.name, value)
                }
                error={formik.errors[field.name]}
                isTouched={formik.touched[field.name]}
                multiline={field.type === "textarea"}
                numberOfLines={field.type === "textarea" ? 4 : undefined}
              />
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
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <UserTypeSelect
            value={formik.values.type}
            onChange={(value) => {
              formik.setFieldValue("type", value);

              if (value === "ong") setSchema(OngSchema);
              else setSchema(AddressSchema);
            }}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userTypeContainer: {
    width: "100%",
  },
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
