import { Pressable, StyleSheet, View } from 'react-native';
import theme from '../theme';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  signInButton: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    color: theme.colors.textMuted,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='repoOwner' placeholder='Repository owner name' />
      <FormikTextInput name='repoName' placeholder='Repository name' />
      <FormikTextInput name='repoRating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='repoReview' placeholder='Review' />
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text color='white' fontWeight='bold'>Create review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
