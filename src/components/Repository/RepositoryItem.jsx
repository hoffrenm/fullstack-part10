import { View, Image, StyleSheet, Pressable } from "react-native";
import Text from "../layout/Text";
import StatsBar from "./StatsBar";
import theme from "../../theme";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
  flexContainer: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  infoContainer: {
    flexDirection: "column",
    paddingLeft: 15,
    flexShrink: 1,
  },
  logo: {
    width: 50,
    height: 50,
  },
  languageText: {
    height: 35,
    padding: 7,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
  },
});

const RepositoryItem = ({ repository }) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(`/repository/${repository.id}`)}>
      <View testID="repositoryItem" style={styles.container}>
        <View style={styles.flexContainer}>
          <Image
            source={{ uri: repository.ownerAvatarUrl }}
            style={styles.logo}
          />
          <View style={styles.infoContainer}>
            <Text fontWeight="bold">{repository.fullName}</Text>
            <Text color="muted" style={{ flexShrink: 1 }}>
              {repository.description}
            </Text>
            <Text style={styles.languageText} color="white">
              {repository.language}
            </Text>
          </View>
        </View>
        <StatsBar repository={repository} />
      </View>
    </Pressable>
  );
};

export default RepositoryItem;
