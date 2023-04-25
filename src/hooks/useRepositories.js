import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ filterParameters }) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    variables: { ...filterParameters, first: 6 },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };

  return {
    repositories: data ? data.repositories : undefined,
    loading,
    error,
    fetchMore: handleFetchMore,
  };
};

export default useRepositories;
