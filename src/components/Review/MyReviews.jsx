import { useMutation, useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';
import { FlatList, StyleSheet } from 'react-native';
import { ItemSeparator } from '../layout/ItemSeparator';
import theme from '../../theme';
import ReviewItem from './ReviewItem';
import { DELETE_REVIEW } from '../../graphql/mutations';

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: theme.colors.mainBackgroundColor,
  },
});

const ReviewsListContainer = ({ reviews, handleDelete }) => {
  const reviewNodes = reviews
    ? reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      style={styles.listContainer}
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} handleDelete={handleDelete} />}
    />
  );
};

const MyReviews = () => {
  const { data, loading, error, refetch } = useQuery(ME, { variables: { includeReviews: true } });
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const handleDelete = async id => {
    try {
      await deleteReview({ variables: { deleteReviewId: id } });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return;
  if (error) return null;

  const reviews = data?.me?.reviews ? data.me.reviews : undefined;

  return (
    <ReviewsListContainer reviews={reviews} handleDelete={handleDelete} />
  );
};


export default MyReviews;