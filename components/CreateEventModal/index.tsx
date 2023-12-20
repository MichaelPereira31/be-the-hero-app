import { Alert, ScrollView, StyleSheet, Text } from "react-native";
import BaseModal, { IBaseModal } from "../BaseModal";
import { useFormik } from "formik";
import { getDefaultValue, getFields } from "./helper";
import TextInput from "../Fields/TextInput";
import LoadingButton from "../Buttons/LoadingButton";
import type { ICreateEventPayload } from "@/services/events/createEvent";
import createEvent from "@/services/events/createEvent";
import { useState } from "react";
import createEventSchema from "./schema";

interface ICreateEventModal extends Omit<IBaseModal, "children"> {
  onCreateSuccessCallback: () => void;
}

const CreateEventModal = ({
  onCreateSuccessCallback,
  ...modalProps
}: ICreateEventModal) => {
  const fields = getFields();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (value: ICreateEventPayload) => {
    if (!formik.isValid) return;

    setIsLoading(true);
    createEvent(value)
      .then(() =>
        Alert.alert("Evento criado com successo! 😄", "", [
          {
            text: "Continuar",
            onPress: () => {
              modalProps.setIsModalVisible(false);
              onCreateSuccessCallback();
            },
          },
        ])
      )
      .catch(() =>
        Alert.alert(
          "Error! ❌",
          "Não foi possivel criar seu evento. Para mais informações, contate o suporte. ☹️"
        )
      )
      .finally(() => setIsLoading(false));
  };

  const formik = useFormik<ICreateEventPayload>({
    initialValues: getDefaultValue(),
    onSubmit: handleSubmit,
    validationSchema: createEventSchema,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnMount: false,
  });

  const handleInputChange = (
    field: keyof ICreateEventPayload,
    text: string
  ) => {
    formik.setFieldValue(field, text);
  };

  return (
    <BaseModal {...modalProps}>
      <ScrollView automaticallyAdjustKeyboardInsets>
        <Text style={styles.title}>Crie novo evento</Text>
        {fields.map((field) => (
          <TextInput
            key={field.name}
            label={field.label}
            style={field.type === "textarea" ? styles.textarea : styles.input}
            placeholder={field.placeholder}
            value={formik.values[field.name] ?? ""}
            setValue={(value: string) => handleInputChange(field.name, value)}
            error={formik.errors[field.name]?.toString()}
            isTouched={!!formik.touched[field.name]}
            multiline={field.type === "textarea"}
            numberOfLines={field.type === "textarea" ? 4 : undefined}
          />
        ))}

        <LoadingButton
          title="Criar Evento"
          isLoading={isLoading}
          onPress={() => handleSubmit(formik.values)}
        />
      </ScrollView>
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    lineHeight: 32,
    marginVertical: 20,
    textAlign: "center",
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
    marginBottom: 10,
  },

  textarea: {
    width: "100%",
    minHeight: 80,
    height: "auto",
    borderWidth: 1,
    borderBottomWidth: 3,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default CreateEventModal;
