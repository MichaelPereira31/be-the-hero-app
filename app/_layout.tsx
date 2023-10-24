import { useEffect } from "react";
import LoginScreen from "../screens/login";
import { Tabs, useRouter } from "expo-router";

export default function LoginPage() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Amor"
        options={{
          href: "/complete-registration",
        }}
      />
      <Tabs.Screen
        name="Amizade"
        options={{
          href: "/home",
        }}
      />
    </Tabs>
  );
}
