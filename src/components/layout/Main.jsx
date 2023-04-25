import { StyleSheet, View } from "react-native";
import RepositoryList from "../Repository/RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "../Signin/SignIn";
import SingleRepository from "../Repository/SingleRepository";
import NewReview from "../Review/NewReview";
import MyReviews from "../Review/MyReviews";
import SignUp from "../Signup/SignUp";

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
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/newreview" element={<NewReview />} exact />
        <Route path="/myreviews" element={<MyReviews />} exact />
        <Route path="/repository/:id" element={<SingleRepository />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
