/**
 * Created by xudongdong121 on 17/3/17.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
} from 'react-native';

class PACSwitchCell extends Component {
    static propTypes = {
        on: React.PropTypes.bool,
        title: React.PropTypes.string,
        onValueChange: React.PropTypes.func,
        style: React.PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
            on: props.on,
        };
    }

    _refreshSwitchValue(value) {
        this.setState({on: value});
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Switch style={styles.switch} value={this.state.on} onValueChange={value => {
                    this.props.onValueChange && this.props.onValueChange(value);
                    this._refreshSwitchValue(value);
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 54,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#cccccc',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    title: {
        flex: 1,
        marginLeft: 18,
        fontSize: 16,
        color: '#4a4a4a',
    },
    switch: {
        marginHorizontal: 18,
    },
});

export default PACSwitchCell;