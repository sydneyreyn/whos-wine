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
import { Query } from "react-apollo";

const GET_MY_PROFILE = gql`
 query getMyProfile {
   collection {
       name
       description
       wines {
           name
           Description
           price
           type
       }
       settings {
           name
           Description
       }
       foods {
           name
           Description
       }
       others {
           name
           Description
       }
     }
 }
`;
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
       <Query query={GET_MY_PROFILE} fetchPolicy="network-only">
         {({ loading, error, data }) => {
           if (loading) {
             return (
               <View style={styles.loader}>
                 <Image source={require("../assets/images/loader.gif")} />
               </View>
             );
           }
           if (error) {
             if (error.message === "GraphQL error: Not authorized") {
               this.props.navigation.navigate("Login");
             }
           }
        //    if (!data.me) {
        //      return <Text>"no data"</Text>;
        //    }
           return (
             <View style={styles.profileHolder}>
               <View style={styles.welcomeText}>
               <Text> Welcome to your secure profile page!!!!</Text>
               <Image source={require('../assets/images/icon.png')} />
                 {/* <Text style={styles.profileName}>{data.collection.name}</Text>
                 <Text style={styles.profileDescription}>{data.collection.description}</Text> */}
               </View>
             </View>
           );
         }}
       </Query>
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
    fontFamily: "Futura",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "#8B008B"
  },
 profileHolder: {
   flex: 1,
   marginTop: 100,
   flexWrap: "wrap",
   flexDirection: "row",
   justifyContent: "center",
   justifyContent: "space-evenly"
 },
 profileName: {
   fontSize: 30,
   fontWeight: "bold",
   color: "#911826"
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
  
