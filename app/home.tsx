import HomeScreen from "@/screens/home";
import { Link } from "expo-router";
import { SafeAreaView, Text } from "react-native";

export default function Home() {
  return (
    <SafeAreaView>
      <Text> Amizadeeee </Text>
      <Link href="/">Logout</Link>
    </SafeAreaView>
  );
}
