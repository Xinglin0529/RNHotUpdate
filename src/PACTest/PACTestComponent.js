/**
 * Created by xudongdong121 on 17/3/16.
 */
import React, { Component } from 'react';
import { View, Text, AppRegistry, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import PACComponent from '../PACModule/PACComponent';
import PACTextInputCell from '../PACModule/PACNavigator/Cell/PACTextInputCell';
import PACImageCodeInputCell from '../PACModule/PACNavigator/Cell/PACImageCodeInputCell';
import PACSmsCodeInputCell from '../PACModule/PACNavigator/Cell/PACSmsCodeInputCell';
import PACSwitchCell from '../PACModule/PACNavigator/Cell/PACSwitchCell';
import PACTipIconCell from '../PACModule/PACNavigator/Cell/PACTipIconCell';

const window = Dimensions.get('window');

class PACTestComponent extends PACComponent {

    constructor(props) {
        super(props);
        this.title = "PACTestCom";
        this.isAbsolute = true;
        this.backgroundColor = "#f1f1f1";
        this.leftImage = require('../PACModule/PACNavigator/img/back.png');
        this.rightTitle = "Next";
        this.itemColor = '#0677da';
        this.state = {
            isValid: true,
        };
    }

    // leftButton() {
    //     return (
    //         <View style={{flex: 1, marginTop: 10, alignItems: 'center', flexDirection: 'row', paddingTop: 3}}>
    //             <TouchableOpacity>
    //                 <Text style={{marginLeft: 14, fontSize: 16, color: '#0677da'}}>Back</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }
    //
    // rightButton() {
    //     return (
    //         <View style={{flex: 1, marginTop: 5, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}}>
    //             <TouchableOpacity>
    //                 <Text style={{marginRight: 10, fontSize: 16, color: '#0677da'}}>Next</Text>
    //             </TouchableOpacity>
    //         </View>
    //     );
    // }
    //
    // titleView() {
    //     return (
    //         <View style={{flex: 1, alignItems: 'center', paddingTop: 10, justifyContent: 'center'}}>
    //             <Text style={{fontSize: 18, color: '#4a4a4a'}}>Next</Text>
    //         </View>
    //     );
    // }

    leftButtonAction() {
        alert('LeftAction');
    }

    rightButtonAction(index) {
        alert('RightAction' + index);
    }

    _pushNext() {
        this.props.navigator.push({screen: PACTestComponent, props: { title: 'fromPush' }});
    }

    contentView() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView style={{flex: 1, width: window.width, marginTop: 64, marginBottom: 49}}>
                    <Text style={{flex: 1, backgroundColor: 'blue', color: 'black', fontSize: 20}} onPress={() => this._pushNext()}> PushNext </Text>
                    <PACTextInputCell
                        style={{marginTop: 20}}
                        inputTitle="手机号"
                        placeholder="请输入手机号码"
                        clearButtonMode="while-editing"
                    />
                    <PACTextInputCell
                        style={{marginTop: 20}}
                        placeholder="请输入手机号码"
                        clearButtonMode="while-editing"
                    />
                    <PACTextInputCell
                        style={{marginTop: 20}}
                        placeholder="请输入个人描述，140字以内"
                        clearButtonMode="while-editing"
                        multiline={true}
                    />
                    <PACImageCodeInputCell
                        style={{marginTop: 20}}
                        clearButtonMode="while-editing"
                        clickAction={() => {alert('click image')}}
                        imageUrl="http://facebook.github.io/react/img/logo_og.png"
                    />
                    <PACSmsCodeInputCell
                        ref="sms"
                        style={{marginTop: 20}}
                        clearButtonMode="while-editing"
                        isValid={this.state.isValid}
                        clickAction={() => {
                            this.refs.sms.start();
                        }}
                    />
                    <PACSwitchCell
                        style={{marginTop: 20}}
                        title="打开推送通知"
                        on={true}
                        onValueChange={(value) => {
                            alert(`${value ? '打开': '关闭'}`);
                        }}
                    />
                    <PACTipIconCell style={{marginTop: 20}} title="列表文字" icon={require('../PACModule/PACNavigator/Cell/img/error.png')}/>
                </ScrollView>
            </View>
        );
    }
}

export default PACTestComponent;
