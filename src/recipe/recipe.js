'use strict';
 
var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;


var style = React.styleSheets.create({
    searchbar:{
        backgroundColor : '#656565'
    }
    
    resultitem:{
    
}
    
});


class recipe extends React.Component{
    
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for houses to buy!
        </Text>
        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>
      </View>
    );
  }
    
}

module.exports = recipe;