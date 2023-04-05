import {
  View,
  Image,
  StyleSheet,
  Button,
  Linking,
  FlatList,
} from "react-native";
import Text from "../layout/Text";
import StatsBar from "./StatsBar";
import theme from "../../theme";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../../graphql/queries";
import { format, parseISO } from "date-fns";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  flexContainer: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    flexShrink: 1,
  },
  listHeaderContainer: {
    backgroundColor: "white",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: "column",
    paddingLeft: 15,
    flexShrink: 1,
  },
  listContainer: {
    backgroundColor: theme.colors.mainBackgroundColor,
  },
  logo: {
    width: 50,
    height: 50,
  },
  rating: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  languageText: {
    height: 35,
    padding: 7,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
  },
});

const RepositoryInfo = ({ repository }) => {
  const handleOutGoingLink = () => {
    Linking.openURL(repository.url);
  };

  return (
    <View style={styles.listHeaderContainer} testID="repositoryItem">
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
      <Button title="Open in GitHub" onPress={() => handleOutGoingLink()} />
    </View>
  );
};

const ReviewItem = ({ review }) => {
  const date = format(parseISO(review.createdAt), "dd.MM.yyyy");

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.rating}>
          <Text fontWeight="bold" color="primary">
            {review.rating}
          </Text>
        </View>
        <View
          style={{ display: "flex", flexDirection: "column", flexShrink: 1 }}
        >
          <Text fontWeight="bold">{review.user.username}</Text>
          <Text>{date}</Text>
          <Text style={{ flexShrink: 1, paddingTop: 5 }}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={{ height: 15 }} />;

const SingleRepository = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: { repositoryId: id },
  });

  if (loading) return;

  const { repository } = data;
  const reviewNodes = repository.reviews;

  const reviews = reviewNodes ? reviewNodes.edges.map((edge) => edge.node) : [];

  return (
    <FlatList
      style={styles.listContainer}
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default SingleRepository;
