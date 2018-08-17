import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  AsyncStorage,
  StatusBar,
  data
} from "react-native";
import gql from "graphql-tag";
import { Avatar, icon } from "react-native-elements";
import { Query } from "react-apollo";
import Feed from "../components/feed";

export default class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Profile",
      headerMode: "screen",
      mode: "card"
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.profileHolder}>
          <View style={styles.welcomeText}>
            <Text style={styles.welcomeText}> profile </Text>
            <Avatar
              style={styles.welcomeText}
              medium
              rounded
              icon={{ name: "user" }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
              // containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
            />
            {/* <Text style={styles.profileName}>{data.collection.name}</Text>
                 <Text style={styles.profileDescription}>{data.collection.description}</Text> */}
            <Text style={styles.subtitleText}>My collections: </Text>
            <Feed />
          </View>
        </View>

        <View style={styles.logoutHolder}>
          <Button
            title="Log out"
            color="#8B008B"
            onPress={async () => {
              await AsyncStorage.removeItem("token");
              this.props.navigation.navigate("Login");
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  welcomeText: {
    fontSize: 40,
    marginbottom: 30,
    marginTop: 50,
    fontFamily: "Futura",
    // justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#8B008B"
  },
  profileHolder: {
    flex: 1,
    marginTop: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-evenly"
  },
  subtitleText: {
    fontSize: 15,
    marginTop: 10,
    fontFamily: "Futura",
    justifyContent: "center",
    color: "black",
  },
  profileName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#8B008B"
  },
  profileDescription: {
    fontSize: 20,
    color: "#676767"
  },
  logoutHolder: {
    marginBottom: 100
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
