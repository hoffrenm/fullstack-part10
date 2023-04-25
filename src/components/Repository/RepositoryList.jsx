import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { ItemSeparator } from '../layout/ItemSeparator';
import useRepositories from "../../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import theme from "../../theme";
import FilterBar from './FilterBar';

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: theme.colors.mainBackgroundColor,
  },
  separator: {
    height: 15,
  },
});

export const RepositoryListContainer = ({
  repositories,
  keyword,
  selectedOrder,
  setSelectedOrder,
  handleOrderChange,
  handleSearchChange,
  handleKeywordChange
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.listContainer}
      data={repositoryNodes}
      ListHeaderComponent={
        <FilterBar
          keyword={keyword}
          handleSearchChange={handleSearchChange}
          handleOrderChange={handleOrderChange}
          selectedOrder={selectedOrder}
          setSelectedOrder={setSelectedOrder}
          handleKeywordChange={handleKeywordChange} />
      }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
    />
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState();
  const [order, setOrder] = useState("CREATED_AT");
  const [sort, setSort] = useState("DESC");
  const [keyword, setKeyword] = useState("");

  const { repositories, error } = useRepositories({
    filterParameters: { orderBy: order, orderDirection: sort, searchKeyword: keyword }
  });

  useEffect(() => {
    setSelectedOrder("default");
    setOrder("CREATED_AT");
    setSort("DESC");
    setKeyword("");
  }, []);

  const handleOrderChange = (value) => {
    switch (value) {
      case "ratingHighest":
        setOrder("RATING_AVERAGE");
        setSort("DESC");
        break;
      case "ratingLowest":
        setOrder("RATING_AVERAGE");
        setSort("ASC");
        break;
      default:
        setOrder("CREATED_AT");
        setSort("DESC");
    }
  };

  if (error) console.log(`Error loading repositories: ${error.message}`);

  return (
    <RepositoryListContainer
      repositories={repositories}
      keyword={keyword}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
      handleOrderChange={handleOrderChange}
      handleKeywordChange={setKeyword}
    />
  );
};

export default RepositoryList;
