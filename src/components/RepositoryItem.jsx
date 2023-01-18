import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import StatsBar from './StatsBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  flexContainer: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',

  },
  infoContainer: {
    flexDirection: 'column',
    paddingLeft: 15,
    flexShrink: 1,
  },
  logo: {
    width: 50,
    height: 50,
  },
  languageText: {
    height: 35,
    padding: 7,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
  }
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.logo} />
        <View style={styles.infoContainer}>
          <Text fontWeight='bold'>{repository.fullName}</Text>
          <Text color='muted' style={{ flexShrink: 1 }}>{repository.description}</Text>
            <Text style={styles.languageText} color='white'>{repository.language}</Text>
        </View>
      </View>
      <StatsBar repository={repository} />
    </View>
  );
};

export default RepositoryItem;
