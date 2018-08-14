import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  AsyncStorage,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Alert,
  StatusBar
} from "react-native";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

var DismissKeyboard = require("dismissKeyboard");

// FORM SET UP
import t from "tcomb-form-native";
const Form = t.form.Form;

const User = t.struct({
  name: t.String,
  email: t.String,
  username: t.String,
  password: t.String
});

const options = {
  auto: "placeholders",
  fields: {
    password: {
        secureTextEntry: true,
        error: "Required field",
    },
    email: {
        error: "Required field",
    },
    name: {
        error: "Required field",
    },
    username: {
        error: "Required field",
    },
  //     password: true,
  //     secureTextEntry: true
  //   }
  // }
}
};

// BACKEND SETUP
const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $name: String!
    $username: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      username: $username
    ) {
      token
      user {
        id
        name
        email
        username
      }
    }
  }
`;

export default class SignupScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { state, navigate } = navigation;
    return {
      title: "Sign up"
    };
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
  };

  render() {
    return (
      <Mutation mutation={SIGNUP}>
        {(signup, { data, loading, error }) => {
          return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
              <TouchableWithoutFeedback
                onPress={() => {
                  DismissKeyboard();
                }}
              >
                <View style={styles.container}>
                  <StatusBar barStyle="light-content" />
                  <View style={styles.signupHolder}>
                  <Text style={styles.welcomeText}>sign up</Text>
                <Text style={styles.subtitleText}>    </Text>
                    <Form
                      ref={c => (this._form = c)}
                      type={User}
                      options={options}
                    />
                    <Button
                      title="Submit"
                      color="#8B008B"
                      onPress={async () => {
                        const value = this._form.getValue(); // use that ref to get the form value

                        try {
                          const { data } = await signup({
                            variables: {
                              name: value.name,
                              email: value.email,
                              username: value.username,
                              password: value.password
                            }
                          });
                          AsyncStorage.setItem("token", data.signup.token);
                          AsyncStorage.setItem(
                            "email",
                            data.signup.user.email
                          );

                          this.props.navigation.navigate("Home");

                          console.log({ data });
                        } 
                        catch (error) {
                          // redirect to sign up
                          console.log({ error });

                          Alert.alert(
                            "There was an error signing you up. Try again!"
                          );
                        }
                      }}
                    />
                    <Button
              title="Return to home"
              color="#8B008B"
              onPress={async () => {
                this.props.navigation.navigate("Home");
                console.log("Button clicked");
              }}
            />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
          );
        }}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: "#fff"
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
  title: {
    color: "#272727",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 100
  }
});

