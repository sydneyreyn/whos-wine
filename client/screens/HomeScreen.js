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
  Button
} from "react-native";
import { WebBrowser } from "expo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { createStackNavigator } from 'react-navigation';

// const App = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Login: { screen: LoginScreen },
// });

// export default App

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
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.homeHolder}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.welcomeText}>who's wine</Text>
          <Text style={styles.welcomeText}>   </Text>
          <Image source={require('../logo.png')} />
          <View style={styles.buttonsHolder}>
            <Button
              title="Login"
              color="#8B008B"
              onPress={async () => {
                this.props.navigation.navigate("Login");
                console.log("Button clicked");
              }}
            />
            <Button
              title="Sign up"
              color="#8B008B"
              onPress={async () => {
                this.props.navigation.navigate("Sign up");
              }}
            />
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
    marginTop: 20,
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 30,
    fontFamily: "Futura",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#8B008B"
  },
  buttonsHolder: {
    marginTop: 30
  }
});
