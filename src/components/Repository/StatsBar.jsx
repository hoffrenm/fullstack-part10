import { View, StyleSheet } from "react-native";
import StatsBarItem from "./StatsBarItem";

const styles = StyleSheet.create({
  flexContainer: {
    backgroundColor: "white",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
});

const StatsBar = ({ repository }) => {
  return (
    <View style={styles.flexContainer}>
      <StatsBarItem value={repository.forksCount} name="Forks" />
      <StatsBarItem value={repository.stargazersCount} name="Stars" />
      <StatsBarItem value={repository.reviewCount} name="Reviews" />
      <StatsBarItem value={repository.ratingAverage} name="Rating" />
    </View>
  );
};

export default StatsBar;
