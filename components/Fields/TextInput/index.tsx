import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  View,
  TextStyle,
  StyleProp,
} from "react-native";

interface ITextInput {
  value: string;
  setValue: (value: string) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  isTouched?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
}

const TextInput = ({ isTouched = true, ...props }: ITextInput) => {
  return (
    <View style={styles.inputSection}>
      {props.label && <Text>{props.label}</Text>}
      <RNTextInput
        style={props.style ?? styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.setValue}
        secureTextEntry={props.secureTextEntry}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
      />
      {props.error && isTouched && (
        <Text style={styles.error}>{props.error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputSection: {
    marginBottom: 12,
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingLeft: 10,
  },
  error: {
    fontSize: 10,
    color: "red",
    marginTop: 4,
  },
});

export default TextInput;
