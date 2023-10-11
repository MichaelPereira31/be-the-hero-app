import { View, StyleSheet, Text } from 'react-native';


const TabBar = (props: any) => (
  <View style={styles.tabBar}>
    {props.navigationState.routes.map((route: any, index: any) => (
      <View
        key={index}
        style={[
          styles.tabItem,
          {
            borderBottomColor: props.navigationState.index === index ? '#dda640' : 'transparent',
            borderBottomRightRadius: props.navigationState.index === 1 ? 30 : 0,
            borderBottomLeftRadius: props.navigationState.index === 0 ? 30 : 0,
          },
        ]}
      >
        <Text
          style={styles.tabText}
          onPress={() => props.jumpTo(route.key)}
        >
          {route.title}
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default TabBar
