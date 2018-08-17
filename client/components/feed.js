import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import gql from "graphql-tag";
import { Avatar, icon } from "react-native-elements";
import { Query } from "react-apollo";

const GET_MY_PROFILE = gql`
  query getMyProfile {
    collections {
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

class Feed extends React.Component {
  render() {
    return (
      <View>
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
            console.log("here", error);
            if (!data.collections) {
              return <Text>"no collections found!"</Text>;
            }
            return (
              data.collections.map(collection => {
                return <Text style={styles.feedText} onPress={() => console.log("Clicked!")} > {collection.name} </Text>;
              })
            )
          }}
        </Query>
      </View>
    );
  }
}
export default Feed;
const styles = StyleSheet.create({
  feedText: {
    backgroundColor: "#e0e0e0",
    marginTop: 20,
    padding: 50
  }
});
