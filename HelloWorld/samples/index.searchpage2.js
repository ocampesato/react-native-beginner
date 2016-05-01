'use strict';

var React = require('react-native');
var SearchPage2 = require('./SearchPage2');

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

class HelloWorld extends React.Component {
  render() {
    return (
      <React.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage2
        }}/>
    );
  }
}

React.AppRegistry.registerComponent('HelloWorld', function() { return HelloWorld });

