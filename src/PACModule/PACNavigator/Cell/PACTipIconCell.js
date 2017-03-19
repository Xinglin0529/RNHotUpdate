/**
 * Created by xudongdong121 on 17/3/17.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

class PACTipIconCell extends Component {
    static propTypes = {
        title: React.PropTypes.string,
        icon: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.number,
        ]),
        style: React.PropTypes.object,
    };
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.tipContainer}>
                    <Image style={styles.tipIcon} defaultSource={this.props.icon}/>
                    <Image style={styles.arrow} defaultSource={require('./img/more.png')}/>
                </View>
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
    tipContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 18,
    },
    tipIcon: {
        marginRight: 10,
        width: 20,
        height: 20,
    },
    arrow: {
        width: 8,
        height: 13,
    },
});

export default PACTipIconCell;