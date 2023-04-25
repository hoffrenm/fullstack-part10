import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Text from "../layout/Text";
import theme from "../../theme";
import { format, parseISO } from 'date-fns';
import { useNavigate } from 'react-router-native';

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
  buttonContainer: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
    flexShrink: 1,
    justifyContent: "center"
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
  button: {
    marginRight: 5,
    marginLeft: 5,
    padding: 12,
    borderRadius: 5
  },
  buttonText: {
    color: "white",
    fontWeight: 700,
    letterSpacing: 0.25
  }
});


const ReviewItem = ({ review, handleDelete }) => {
  const navigate = useNavigate();
  const date = format(parseISO(review.createdAt), "dd.MM.yyyy");

  const createButtonAlert = () => {
    Alert.alert("Delete review", "Are you sure you want to delete this review?", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: 'Delete',
        onPress: () => handleDelete(review.id)
      },
    ]);
  };

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
          <Text fontWeight="bold">{review.repository.fullName}</Text>
          <Text>{date}</Text>
          <Text style={{ flexShrink: 1, paddingTop: 5 }}>{review.text}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigate(`/repository/${review.repository.id}`)}
          style={{ backgroundColor: theme.colors.primary, ...styles.button }}>
          <Text style={styles.buttonText}>
            View repository
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={createButtonAlert}
          style={{ backgroundColor: theme.colors.error, ...styles.button }}>
          <Text style={styles.buttonText}>
            Delete review
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewItem;