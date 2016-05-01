'use strict';

var React = require('react-native');
var SearchPage3 = require('./SearchPage3');

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
l
class HelloWorld extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage3
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('HelloWorld', function() { return HelloWorld});

