import { FlatList, View, StyleSheet } from "react-native";
import useRepositories from "../../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import theme from "../../theme";
import OrderPicker from "./OrderPicker";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: theme.colors.mainBackgroundColor,
  },
  separator: {
    height: 15,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
  repositories,
  selectedOrder,
  setSelectedOrder,
  handleOrderChange,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.listContainer}
      data={repositoryNodes}
      ListHeaderComponent={
        <OrderPicker
          handleOrderChange={handleOrderChange}
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
        />
      }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
    />
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState();
  const [orderParameters, setOrderParameters] = useState();

  const { repositories, loading, error } = useRepositories({
    orderParameters,
  });

  useEffect(() => {
    setSelectedOrder("default");
    setOrderParameters({ orderBy: "CREATED_AT", orderDirection: "ASC" });
  }, []);

  const handleOrderChange = (value) => {
    switch (value) {
      case "ratingHighest":
        setOrderParameters({
          orderBy: "RATING_AVERAGE",
          orderDirection: "DESC",
        });
        break;
      case "ratingLowest":
        setOrderParameters({
          orderBy: "RATING_AVERAGE",
          orderDirection: "ASC",
        });
        break;
      default:
        setOrderParameters({ orderBy: "CREATED_AT", orderDirection: "ASC" });
    }
  };

  if (loading) return;
  if (error) console.log(`Èrror loading repositories: ${error.message}`);

  return (
    <RepositoryListContainer
      repositories={repositories}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      handleOrderChange={handleOrderChange}
    />
  );
};

export default RepositoryList;
