import { View, StyleSheet, ScrollView } from "react-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { ME } from "../../graphql/queries";
import Constants from "expo-constants";
import theme from "../../theme";
import AppBarTab from "./AppBarTab";
import useAuthStorage from "../../hooks/useAuthStorage";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackgroundColor,
  },
});

const AppBar = () => {
  const { data, loading } = useQuery(ME);
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();

  if (loading) return;

  const user = data.me ? data.me : undefined;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" to="/" />

        {user ? (
          <>
            <AppBarTab text="Create a review" to="/newreview"></AppBarTab>
            <AppBarTab text="Sign out" onPress={() => signOut()}></AppBarTab>
          </>
        ) : (
          <AppBarTab text="Sign in" to="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
