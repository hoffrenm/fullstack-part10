import { View, StyleSheet } from "react-native";
import Text from "../layout/Text";
import { formatToK } from "../../utils/utils";

const styles = StyleSheet.create({
  flexContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
});

const StatsBarItem = ({ value, name }) => {
  return (
    <View style={styles.flexContainer}>
      <Text fontWeight="bold">{formatToK(value)}</Text>
      <Text color="muted" fontSize="small">
        {name}
      </Text>
    </View>
  );
};

export default StatsBarItem;
