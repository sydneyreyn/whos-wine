import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  AsyncStorage,
  Button,
} from "react-native";
import { WebBrowser } from "expo";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      drawerLabel: "Home",
      headerMode: "screen",
      mode: "card",
    };
  };

  async componentDidMount() {
    const token = await AsyncStorage.getItem("token");
    if (!token) {
      this.props.navigation.navigate("Home");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.homeHolder}>
          <Text style={styles.welcomeText}>who's wine?</Text>
          <Text style={styles.subtitleText}>    </Text>
          <Image source={require('../assets/images/icon.png')} />
          <Text style={styles.subtitleText}> </Text>
          <Text style={styles.subtitleText}>portuguese wines, wherever you want </Text>
          <Text style={styles.subtitleText}>them to be</Text>
          <View style={styles.buttonsHolder}>
          <TouchableOpacity>
            <Button
              title="Login"
              color="#8B008B"
              onPress={async () => {
                this.props.navigation.navigate("Login");
                console.log("Button to login screen clicked");
              }}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Button
              title="Create an account"
              color="#8B008B"
              onPress={() => {
                this.props.navigation.navigate("Signup");
                console.log("Button clicked");
              }}
            />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  homeHolder: {
    alignItems: "center",
    flex: 1,
    padding: 20,
    marginTop: 10,
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: "Futura",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#8B008B"
  },
  subtitleText: {
    fontSize: 15,
    fontFamily: "Futura",
    justifyContent: "center",
    fontStyle: "italic",
    color: "black",
  },
  buttonsHolder: {
    marginTop: 30,
    fontWeight: "bold",
    fontFamily: "Futura",
  },
});