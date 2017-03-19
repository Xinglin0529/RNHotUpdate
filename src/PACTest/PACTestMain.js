/**
 * Created by xudongdong121 on 17/3/16.
 */
import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';
import { PACNavigator } from '../PACModule/PACNavigator';
import PACTestComponent from './PACTestComponent';

class PACTestMain extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PACNavigator
                initialRoute={{screen: PACTestComponent, props: {}}}
                hideNavBar={false}
            />
        );
    }
}

AppRegistry.registerComponent('PACTestMain', () => PACTestMain);

export default PACTestMain;