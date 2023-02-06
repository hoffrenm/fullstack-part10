import { FlatList, View, StyleSheet } from 'react-native';
import useRepositories from '../hooks/useRepository';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#F1F1F1',
  },
  separator: {
    height: 15,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      style={styles.listContainer}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem repository={item} />
      )}
    />
  );
};

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  if (loading) return;
  if (error) console.log(`Èrror loading repositories: ${error.message}`);

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;
