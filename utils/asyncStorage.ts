import AsyncStorage from "@react-native-async-storage/async-storage";
import { Callback } from "@react-native-async-storage/async-storage/lib/typescript/types";

export const setItem = async (name: string, value: string) => await AsyncStorage.setItem(name, value)

export const getItem = async (name: string) => await AsyncStorage.getItem(name)

export const removeItem = async (name: string, callback?: Callback) => await AsyncStorage.removeItem(name, callback)

export const clear = async (callback?: Callback) => await AsyncStorage.clear(callback)
