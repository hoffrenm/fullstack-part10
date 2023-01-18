import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.tabText,
  },
  colorMuted: {
    color: theme.colors.textMuted,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeSmall: {
    fontSize: theme.fontSizes.small,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  fontWeightLight: {
    fontWeight: theme.fontWeights.light,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'white' && styles.colorWhite,
    color === 'muted' && styles.colorMuted,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'small' && styles.fontSizeSmall,
    fontWeight === 'bold' && styles.fontWeightBold,
    fontWeight === 'light' && styles.fontWeightLight,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
