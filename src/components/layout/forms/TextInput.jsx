import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import theme from "../../../theme";

const styles = StyleSheet.create({
  textInputError: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const hasError = error ? styles.textInputError : null;
  const textInputStyle = [style, hasError];

  return (
    <NativeTextInput
      style={textInputStyle}
      placeholderTextColor={theme.colors.textMuted}
      {...props}
    />
  );
};

export default TextInput;
