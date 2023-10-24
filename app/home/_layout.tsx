import { USER_BASE_FIELDS_KEY } from "@/components/login-form";
import useCache from "@/hooks/useCache";
import { IUserType } from "@/services/user/create";
import { Tabs } from "expo-router";

const DEFAULT_TABS_CONF = {
  headerShown: false,
};

const Layout = () => {
  const { cachedValue } = useCache<{ type: IUserType }>(USER_BASE_FIELDS_KEY);

  const isOng = cachedValue?.type === "ong";
  const isVoluntary = cachedValue?.type === "voluntary";

  return (
    <Tabs>
      <Tabs.Screen name="events" options={DEFAULT_TABS_CONF} />
      <Tabs.Screen
        name="subscribed-events"
        options={{
          ...DEFAULT_TABS_CONF,
          tabBarItemStyle: {
            display: isVoluntary ? "flex" : "none",
          },
        }}
      />
      <Tabs.Screen
        name="my-events"
        options={{
          ...DEFAULT_TABS_CONF,
          tabBarItemStyle: {
            display: isOng ? "flex" : "none",
          },
        }}
      />
      <Tabs.Screen name="profile" options={DEFAULT_TABS_CONF} />
    </Tabs>
  );
};

export default Layout;
