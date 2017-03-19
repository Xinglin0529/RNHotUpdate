/**
 * Created by xudongdong121 on 17/3/17.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';

class PACImageCodeInputCell extends Component {
    static propTypes = {
        inputTitle: React.PropTypes.string,
        imageUrl: React.PropTypes.string,
        clickAction: React.PropTypes.func,
    };

    static defaultProps = {
        inputTitle: '验证码',
        placeholder: '请输入验证码',
    };

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: props.imageUrl,
        };
    }

    focus() {
        this.refs.input.focus();
    }

    blur() {
        this.refs.input.blur();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.imageUrl != undefined) {
            this.setState({
                imageUrl: nextProps.imageUrl,
            });
        }
    }

    render() {
        const {inputTitle, imageUrl, style, clickAction, ...otherProps} = this.props;
        return (
            <View style={[styles.container, {...style}]}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>{this.props.inputTitle}</Text>
                    <TextInput ref="input" style={styles.textInput} placeholder={this.props.placeholder} {...otherProps}/>
                </View>
                <TouchableOpacity style={{marginRight: 18}} onPress={() => clickAction && clickAction()}>
                    <Image style={styles.image} source={{uri: this.state.imageUrl}}/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#cccccc',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 54,
        alignItems: 'center'
    },
    inputTitle: {
        width: 80,
        marginLeft: 18,
        fontSize: 16,
        color: '#4a4a4a',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 18,
        fontSize: 16,
        color: '#4a4a4a',
        padding: 0,
    },
    image: {
        width: 90,
        height: 38,
    }
});

export default PACImageCodeInputCell;