import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = ({ id }) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: id, first: 4 },
    fetchPolicy: 'cache-and-network',
  });

  const handleFetchMoreReviews = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    repository: data ? data.repository : undefined,
    reviews: data?.repository?.reviews ? data.repository.reviews : undefined,
    loading,
    error,
    fetchMore: handleFetchMoreReviews,
  };
};

export default useRepository;
