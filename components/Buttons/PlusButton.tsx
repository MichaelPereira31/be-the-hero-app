import { StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

interface IPlus {
  onPress: () => void;
}

function Plus({ onPress }: IPlus) {
  return (
    <TouchableOpacity style={[styles.iconTabRound]} onPress={onPress}>
      <Feather name="plus" size={24} color="white" />
    </TouchableOpacity>
  );
}
export default Plus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTabRound: {
    width: 60,
    height: 60,
    borderRadius: 50,
    elevation: 1,
    marginBottom: 20,
    flexDirection: "row",
    backgroundColor: "#dda640",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#27AE60",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
});
