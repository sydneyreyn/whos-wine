import React from "react";
import { View, Text, StyleSheet } from "react-native";
class Feed extends React.Component {
 render() {
   return (
     <View>
       {this.props.posts.map(collection => {
         return <Text style={styles.feedText}> {collection.text}</Text>;
       })}
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

