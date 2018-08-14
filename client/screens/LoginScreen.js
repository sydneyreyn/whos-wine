import React from "react";
import {
 View,
 ScrollView,
 StyleSheet,
 Button,
 Text,
 TextInput,
 AsyncStorage,
 Alert,
 KeyboardAvoidingView,
 TouchableWithoutFeedback,
 Scene,
 StatusBar,
 data
} from "react-native";

const templates = require("tcomb-form-native/lib/templates/bootstrap");

import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Profile from "./ProfileScreen.js";

var DismissKeyboard = require("dismissKeyboard");

// FORM SET UP
import t from "tcomb-form-native";
import { hidden } from "ansi-colors";

t.form.Form.templates = templates;

const Form = t.form.Form;
const User = t.struct({
 email: t.String,
 password: t.String,
//  rememberMe: t.Boolean,
});

const options = {
 auto: "placeholders",
 fields: {
   password: {
    //  secureTextEntry: true,
     error: "Required field",
   },
   email: {
    error: "Required field",
   }
 //     autoCorrect: false,
    //  returnKeyType: "next",
    //  password: true
 }
};

// //BACKEND SET UP
const LOGIN = gql`
 mutation login(
     $email: String!
     $password: String!
     ) {
   login(
       email: $email, 
       password: $password
    ) {
     token
     user {
       id
       name
       email
     }
   }
 }
`;

export default class LoginScreen extends React.Component {
 static navigationOptions = ({ navigation }) => {
   const { state, navigate } = navigation;
   return {
     title: 'Profile'
   };
 };

 async componentDidMount() {
   const token = await AsyncStorage.getItem("token");
   if (token) {
     this.props.navigation.navigate('Profile');
   }
 }

 handleSubmit = () => {
   const value = this._form.getValue(); // use that ref to get the form value
   console.log('value: ', value);
 };
 
 render() {
   return (
     <Mutation mutation={LOGIN}>
       {(login, { data, loading, error }) => {
         return (
           <KeyboardAvoidingView style={styles.container} behavior="padding">
             <TouchableWithoutFeedback
               onPress={() => {
                 DismissKeyboard();
               }}
             >
               <View style={styles.container}>
                 <StatusBar barStyle="light-content" />
                 <View style={styles.loginHolder}>
                 <Text style={styles.welcomeText}>log in</Text>
                <Text style={styles.subtitleText}>    </Text>
                   <Form
                     ref={c => this._form = c}
                     type={User}
                     options={options}
                   />
                   <Button style={styles.loginHolder}
                     title="Submit"
                     color="#8B008B"
                     onPress={async () => {
                       const value = this._form.getValue(); // use that ref to get the form value
                       console.log("Login page submit button clicked");

                        try {
                         const { data } = await login({
                           variables: {
                             email: value.email,
                             password: value.password,
                           }
                         });
                         console.log({ data });
                         await AsyncStorage.setItem("token", data.login.token);
                         await AsyncStorage.setItem(
                           "email",
                           data.login.user.email
                        );
                        this.props.navigation.navigate('Profile');

                       }
                       catch (e) {
                        console.log({ e })
                        this.props.navigation.navigate('Login');


                         Alert.alert(
                            "There was an error logging you in. Please try again!"
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
                 {/* <View style={styles.signupOption}>
                   <Text style={styles.signupOption}>new to who's wine?</Text>
                   <Text style={styles.signupOption}> </Text>
                   <Button
                     title="Sign up"
                     color="#8B008B"
                     fontsize="10"
                     onPress={() => this.props.navigation.navigate("Signup")}
                   />
                 </View> */}
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
 title: {
   color: "#272727",
   fontSize: 20,
   fontWeight: "bold",
   marginBottom: 100,
 },
//  signupOption: {
//    flexDirection: "row",
//    alignItems: "center",
//    justifyContent: "center",
//    fontSize: 15,
//    fontFamily: "Futura",
//    fontWeight: "bold",
//    fontStyle: "italic",
//    color: "black",
//  },
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
 loginHolder: {
    fontSize: 15,
    fontFamily: "Futura",
    fontWeight: "bold",
    color: "#8B008B"
 },
});

