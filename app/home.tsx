import LoadingButton from "@/components/Buttons/LoadingButton";
import useAuthentication from "@/hooks/useAuthentication";
import HomeScreen from "@/screens/home";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { SafeAreaView, Text } from "react-native";

export default function Home() {
  const { clearToken } = useAuthentication();
  const { push } = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  return (
    <SafeAreaView>
      <Text> Amizadeeee </Text>
      <LoadingButton
        title="Logout"
        isLoading={isLoading}
        onPress={() => {
          setIsLoading(true);
          clearToken()
            .then(() => {
              push("/");
            })
            .finally(() => {
              setIsLoading(false);
            });
        }}
      />
    </SafeAreaView>
  );
}
