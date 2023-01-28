import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textMuted: '#808080',
    primary: '#0366d6',
    mainBackgroundColor: '#e1e4e8',
    appBarBackgroundColor: '#24292e',
    tabText: '#FFFFFF',
    error: '#d73a4a',
  },
  fontSizes: {
    small: 12,
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    })
  },
  fontWeights: {
    light: '200',
    normal: '400',
    bold: '700',
  },
};

export default theme;
