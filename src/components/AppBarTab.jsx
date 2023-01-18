import { Pressable, StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  tabItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <View style={styles.tabItem}>
      <Pressable>
        <Text color='white'>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
