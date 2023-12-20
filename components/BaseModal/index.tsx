import { TUseModalConf } from "@/hooks/useModal";
import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export interface IBaseModal extends TUseModalConf {
  children: ReactNode;
  removeContainer?: boolean;
}

export default function BaseModal({
  isModalVisible,
  setIsModalVisible,
  children,
  removeContainer,
}: IBaseModal) {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setIsModalVisible(false)}
    >
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setIsModalVisible(false)}
      >
        <Text>X</Text>
      </TouchableOpacity>
      {!!removeContainer ? (
        children
      ) : (
        <View style={styles.container}>{children}</View>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 32,
    right: -15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: "#aaa",
    fontSize: 8,
    zIndex: 1,
  },
  container: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    padding: 24,
    minHeight: "60%",
  },
});
