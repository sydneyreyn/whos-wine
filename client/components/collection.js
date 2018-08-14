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
 Scene,
 KeyboardAvoidingView
} from "react-native";

import { Mutation } from "react-apollo";
import gql from "graphql-tag";

// FORM SET UP
import t from "tcomb-form-native";
const Form = t.form.Form;

const Collection = t.struct({
 name: n.String
});

const options = {
 auto: "placeholders"
};

// //BACKEND SET UP
const CREATE_COLLECTION = gql`
 mutation createcollection($name: String!, $description: String!) {
   createcollection(name: $name, description: $description) {
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

export default class CreatePost extends React.Component {
 static navigationOptions = ({ navigation }) => {
   const { state, navigate } = navigation;
   return {
     title: "Create Collection"
   };
 };

 render() {
   return (
     <Mutation mutation={CREATE_COLLECTION}>
       {(createCollection, { data, loading, error }) => {
         return (
           <View style={styles.container}>
             <Form
               style={styles.formHolder}
               ref={c => (this._CreateCollectionForm = c)}
               type={Collection}
               options={options}
             />
             <Button
               title="Collection"
               color="#911826"
               onPress={async () => {
                 const value = this._CreateCollectionForm.getValue();
                 const name = await AsyncStorage.getItem("name");
                 console.log({
                   name,
                   description: value.description,
                   wines: value.wine,
                   settings: value.settings,
                   foods: value.foods,
                   others: value.others
                 });
                 try {
                   const { data } = await createCollection({
                     variables: {
                       name: name,
                       description: value.description,
                       wines: value.wine,
                       settings: value.settings,
                       foods: value.foods,
                       others: value.others
                     }
                   });

                   await this.props.refetchCollections();

                   console.log({ data });
                 } catch (error) {
                   // redirect to sign up
                   console.log({ error });

                   Alert.alert(
                     "There was an error making collection. Try again!"
                   );
                 }
               }}
             />
           </View>
         );
       }}
     </Mutation>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   justifyContent: "center",
   backgroundColor: "#ffffff",
   padding: 10
 }
});

// class Post extends React.Component{
//     render () {
//         return (
//             <View>
//               <Panel bsStyle="info">
//                  <Panel.Heading>
//                      <Panel.Title componentClass="h3">{this.props.author.name}

//                      </Panel.Title>
//                     </Panel.Heading>
//                  <Panel.Body>{this.props.text}</Panel.Body>
//                 </Panel>

//             </View>
//         )
//     }
// }

// export default Post