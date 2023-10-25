import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import PlusButton from "@/components/Buttons/PlusButton";

import mock from "../../mocks/list.json";
//import api from '../../services/api';

import PageHeader from "../../components/PageHeader";
import EventItem from "../../components/EventItem";

export default function HomeScreen() {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const [subject, setSubject] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  const [events, setEvents] = useState(mock);

  const handleToggleFiltersVisible = () =>
    setIsFiltersVisible(!isFiltersVisible);

  const fetchEvents = (query = "") => {
    console.log("fetching events...");
  };

  return (
    <View style={styles.container}>
      <PageHeader
        title="Casos Disponiveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={25} color="#FfF" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible ? (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Local</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={(text) => setSubject(text)}
              placeholder="Qual local?"
              placeholderTextColor="#c1bccc"
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da Semana</Text>
                <TextInput
                  value={weekDay}
                  onChangeText={(text) => setWeekDay(text)}
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#c1bccc"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  value={time}
                  onChangeText={(text) => setTime(text)}
                  style={styles.input}
                  placeholder="Horário"
                  placeholderTextColor="#c1bccc"
                />
              </View>
            </View>

            <RectButton
              style={styles.submitButton}
              onPress={() => fetchEvents()}
            >
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        ) : (
          <View></View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.CasesList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {events.map((event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </ScrollView>
      <View style={styles.PlusButton}>
        <PlusButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },

  CasesList: {
    marginTop: -40,
  },

  PlusButton: {
    position: "absolute",
    alignSelf: "flex-end",
    top: "90%",
    marginRight: "7%",
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: "#fff",
  },

  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputBlock: {
    width: "48%",
  },

  submitButton: {
    backgroundColor: "#4CAF50",
    height: 56,
    flexDirection: "row",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  submitButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
