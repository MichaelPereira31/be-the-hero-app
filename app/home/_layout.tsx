import { USER_BASE_FIELDS_KEY } from "@/components/login-form";
import useCache from "@/hooks/useCache";
import { IUserType } from "@/services/user/create";
import { Tabs } from "expo-router";
import { Feather, MaterialIcons } from "@expo/vector-icons";
const DEFAULT_TABS_CONF = {
  headerShown: false,
};

const Layout = () => {
  const { cachedValue } = useCache<{ type: IUserType }>(USER_BASE_FIELDS_KEY);

  const isOng = cachedValue?.type === "ong";
  const isVoluntary = cachedValue?.type === "voluntary";

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#dda640",
        tabBarStyle: {
          backgroundColor: "white",
          elevation: 1,
          borderTopWidth: 1,
          height: "7%",
          borderWidth: 1,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="events"
        options={{
          ...DEFAULT_TABS_CONF,
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="subscribed-events"
        options={{
          ...DEFAULT_TABS_CONF,
          tabBarItemStyle: {
            display: isVoluntary ? "flex" : "none",
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="playlist-add-check"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my-events"
        options={{
          ...DEFAULT_TABS_CONF,
          tabBarItemStyle: {
            display: isOng ? "flex" : "none",
          },
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          ...DEFAULT_TABS_CONF,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
