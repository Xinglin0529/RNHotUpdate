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

class PACSmsCodeInputCell extends Component {
    static propTypes = {
        inputTitle: React.PropTypes.string,
        countDown: React.PropTypes.number,
        isValid: React.PropTypes.bool,
    };

    static defaultProps = {
        inputTitle: '验证码',
        placeholder: '请输入验证码',
        countDown: 60,
    };

    constructor(props) {
        super(props);
        this.state = {
            buttonStatus: ButtonStatus.normal,
            countDown: props.countDown,
            isValid: props.isValid || true,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isValid !== undefined) {
            this.setState({isValid: nextProps.isValid});
        }
    }

    focus() {
        this.refs.input.focus();
    }

    blur() {
        this.refs.input.blur();
    }

    start() {
        this._startCount();
    }

    reset() {
        this._clearTimer();
        this.setState({
            buttonStatus: ButtonStatus.normal,
        });
    }

    _clearTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
    _startCount() {
        this._clearTimer();
        const startTime = Math.floor(new Date().valueOf() / 1000);
        const countDown = this.props.countDown;
        this.setState({
            buttonStatus: ButtonStatus.disable,
        });
        this.timer = setInterval(() => {
            const now = Math.floor(new Date().valueOf() / 1000);
            const left = countDown - (now - startTime);
            if (left > 0) {
                this.setState({
                    countDown: left,
                });
            } else {
                this.setState({
                    buttonStatus: ButtonStatus.resend,
                });
                this._clearTimer();
            }
        }, 100);
    }

    _buttonTitle() {
        if (this.state.buttonStatus === ButtonStatus.normal) {
            return "获取验证码";
        } else if (this.state.buttonStatus === ButtonStatus.disable) {
            return `${this.state.countDown}秒后重新发送`;
        } else {
            return "点击重发";
        }
    }

    render() {
        const {inputTitle, style, clickAction, ...otherProps} = this.props;
        const temp = !this.state.isValid ? <Image style={styles.image}/> : <View/>;
        const buttonStyle = this.state.buttonStatus === ButtonStatus.disable ? styles.buttonDisabledStyle : styles.buttonAvailableStyle;
        return (
            <View style={[styles.container, {...style}]}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>{this.props.inputTitle}</Text>
                    <TextInput ref="input" style={styles.textInput} placeholder={this.props.placeholder} {...otherProps}/>
                </View>
                <View style={styles.timerContainer}>
                    {temp}
                    <TouchableOpacity onPress={() => {
                        if (this.state.buttonStatus === ButtonStatus.disable) return;
                        clickAction && clickAction();
                    }}>
                        <Text style={[styles.timerButton, buttonStyle]}>{this._buttonTitle()}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const ButtonStatus = {
    normal: 'normal',
    disable: 'disable',
    resend: 'resend',
};

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
    timerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 54,
        marginRight: 18,
    },
    image: {
        width: 20,
        height: 20,
        backgroundColor: 'red',
        marginRight: 18,
    },
    timerButton: {
        borderWidth: StyleSheet.hairlineWidth,
        fontSize: 12,
        paddingHorizontal: 5,
        paddingTop: 4,
        paddingBottom: 3,
    },
    buttonAvailableStyle: {
        borderColor: '#0677da',
        color: '#0677da',
    },
    buttonDisabledStyle: {
        borderColor: '#bbbbbb',
        color: '#bbbbbb',
    },
});

export default PACSmsCodeInputCell;