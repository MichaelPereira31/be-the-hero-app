import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import CardEventModal from "./CardEventModal";
import getEventById from "@/services/events/getEventById";
import { IEvent } from "@/services/events/getEvents";
import BaseModal from "../BaseModal";

type TSimpleModal = {
  eventID: string;
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
};

export default function SimpleModal({
  eventID,
  isModalVisible,
  setModalVisible,
}: TSimpleModal) {
  const [event, setEvent] = useState<IEvent>();

  const fetchEvent = async () => {
    getEventById(eventID).then(({ data }) => {
      setEvent(data.data);
    });
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <BaseModal
      isModalVisible={isModalVisible}
      setIsModalVisible={setModalVisible}
      removeContainer
    >
      <CardEventModal event={event} />
    </BaseModal>
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
});
