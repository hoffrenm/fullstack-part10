import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

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

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text color='white' fontWeight='bold'>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;
