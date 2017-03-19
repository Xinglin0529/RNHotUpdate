/**
 * Created by xudongdong121 on 17/3/16.
 */
import React, { Component } from 'react';
import { View, Image, Platform } from 'react-native';

class PACBarView extends Component {
    static propTypes = {
        backgroundColor: React.PropTypes.string,
        backgroundImage: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.number,
        ]),
        contentView: React.PropTypes.node,
        isTransparent: React.PropTypes.bool,
        hideNavBar: React.PropTypes.bool,
    };

    render() {
        let barView = <View />;
        if (this.props.hideNavBar) {
            return barView;
        }
        const barHeight = Platform.OS === 'ios' ? 64 : 44;

        if (this.props.backgroundColor) {
            barView = <View style={{ backgroundColor: this.props.backgroundColor, height: barHeight }}>{this.props.contentView}</View>;
        }
        if (this.props.backgroundImage) {
            barView = <Image style={{ height: barHeight }} source={this.props.backgroundImage}>{this.props.contentView}</Image>;
        }
        if (!this.props.backgroundColor && !this.props.backgroundImage) {
            barView = <View style={[{ height: barHeight }, !this.props.isTransparent?{ backgroundColor: 'white' }:{}]}>{this.props.contentView}</View>;
        }

        return barView;
    }
}

export default PACBarView;