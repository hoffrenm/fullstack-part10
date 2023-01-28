import { StyleSheet, View } from "react-native";
import { Link } from 'react-router-native';
import Text from "./Text";

const styles = StyleSheet.create({
  tabItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

const AppBarTab = ({ text, location }) => {
  return (
    <View style={styles.tabItem}>
      <Link to={location}>
        <Text color='white'>
          {text}
        </Text>
      </Link>
    </View>
  );
};

export default AppBarTab;
