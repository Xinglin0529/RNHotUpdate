import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry,
    StyleSheet,
} from 'react-native';

class Demo extends Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}> React native </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20
    }
});

AppRegistry.registerComponent('Demo', () => Demo);
