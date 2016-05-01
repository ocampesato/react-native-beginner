'use strict';

var React = require('react-native');

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class HelloWorld extends React.Component {
  render() {
   return React.createElement(React.Text, {style: styles.text}, "Hello World from React Native!");
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() { return HelloWorld });

