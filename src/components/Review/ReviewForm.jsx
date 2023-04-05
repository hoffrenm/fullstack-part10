import { Pressable, StyleSheet, View } from "react-native";
import theme from "../../theme";
import FormikTextInput from "../layout/forms/FormikTextInput";
import Text from "../layout/Text";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  signInButton: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    color: theme.colors.textMuted,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

const ReviewForm = ({ submit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput name="repositoryName" placeholder="Repository name" />
      <FormikTextInput
        name="rating"
        placeholder="Rating 0 - 100"
        type="number"
      />
      <FormikTextInput name="text" placeholder="Review" multiline={true} />
      <Pressable
        style={styles.signInButton}
        type="submit"
        onPress={() => submit()}
      >
        <Text color="white" fontWeight="bold">
          Create review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
