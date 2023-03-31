import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Navigate, Route, Routes } from 'react-router-native';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import NewReview from './NewReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />

      <Routes>
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/newreview" element={<NewReview />} exact />
        <Route path="/repository/:id" element={<SingleRepository />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </View>
  );
};

export default Main;
