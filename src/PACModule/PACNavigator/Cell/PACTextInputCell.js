/**
 * Created by xudongdong121 on 17/3/17.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

class PACTextInputCell extends Component {
    static propTypes = {
        inputTitle: React.PropTypes.string,
    };

    focus() {
        this.refs.input.focus();
    }

    blur() {
        this.refs.input.blur();
    }

    render() {
        const {inputTitle, style, multiline, ...otherProps} = this.props;
        let text = <View/>;
        let height = 54; //默认输入框高度
        let textInputProps = {...otherProps, multiline};
        let containerStyle = {...style};
        const underlineColorAndroid = "transparent";
        if (multiline) {
            height = 126; //multiline=true时的高度，且无title
            textInputProps = {...textInputProps, underlineColorAndroid} //去除android底边框
            containerStyle = {...containerStyle, paddingVertical: 10};
        } else {
            text = inputTitle && inputTitle.length > 0 ? <Text style={styles.inputTitle}>{inputTitle}</Text> : <View/>;
        }
        return (
            <View style={[styles.container, {height: height}, {...containerStyle}]}>
                {text}
                <TextInput ref="input" style={styles.textInput} {...textInputProps}/>
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
        textAlignVertical: 'center',
    },
});

export default PACTextInputCell;