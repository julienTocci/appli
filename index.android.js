/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Example = require('./src/Example');


var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});


class Menu extends React.Component {
  render() {
    return (
        
        <React.Navigator
        initialRoute={{name: 'App', index: 0}}
        renderScene={(route, navigator) =>
            <Example
            name={route.name}
            onForward={() => {
                var nextIndex = route.index + 1;
                navigator.push({
                    name: 'Example ' + nextIndex,
                    index: nextIndex,
                });
            }}
            onBack={() => {
                if (route.index > 0) {
                navigator.pop();
                }
            }}
            />
        }
        />
    );
  }
}

//React.AppRegistry.registerComponent('App', () => require('./src/app'));
React.AppRegistry.registerComponent('App', function() { return Menu });
