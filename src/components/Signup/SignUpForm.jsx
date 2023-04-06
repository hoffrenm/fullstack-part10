import { Pressable, View, StyleSheet } from "react-native";
import FormikTextInput from "../layout/forms/FormikTextInput";
import Text from "../layout/Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  signUpButton: {
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

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry={true}
      />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Repeat password"
        secureTextEntry={true}
      />
      <Pressable style={styles.signUpButton} onPress={onSubmit}>
        <Text color="white" fontWeight="bold">
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
