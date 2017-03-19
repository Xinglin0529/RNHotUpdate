/**
 * Created by songhongxi271 on 17/3/14.
 */

var screenWidth = require('Dimensions').get('window').width;
var scale = (screenWidth/375.0).toFixed(2);

import React, { Component} from  'react';
import {AppRegistry, Image, View, StyleSheet, Text} from 'react-native';

class  Banans extends  Component {
    render(){
        //获取需要展示的信息
        var title = this.props.title?this.props.title:"";
        var subTitle = this.props.subTitle?this.props.subTitle:"";

        var showTopLine = this.props.showTopLine?this.props.showTopLine:false;
        var topLineHasMargin = this.props.topLineHasMargin?this.props.topLineHasMargin:false;

        var showBottomLine = this.props.showBottomLine?this.props.showBottomLine:false;
        var bottomLineHasMargin = this.props.bottomLineHasMargin?this.props.bottomLineHasMargin:false;

        //顶部边线
        var topLineView;
        if(showTopLine && topLineHasMargin) {
            topLineView = <View style={styles.line}></View>;
        }else if(showTopLine && topLineHasMargin == false){
            topLineView = <View style={styles.marginLine}></View>;
        }

        //底部边线
        var bottomLineView;
        if(showBottomLine && bottomLineHasMargin) {
            bottomLineView = <View style={styles.line}></View>;
        }else if(showBottomLine && bottomLineHasMargin == false){
            bottomLineView = <View style={styles.marginLine}></View>;
        }

        return (
            <View>
                {topLineView}
                <View style={styles.container}>
                    <Text style={styles.blackTitle}>{title}</Text>
                    <View style={styles.subContainer}>
                        <Text style={styles.subTitle}>{subTitle}</Text>
                    </View>
                    <Image style={styles.headIamge} source={require('./img/cart_badge_bg.png')}></Image>
                    <Image style={styles.rightArrow} source={require('./img/cart_badge_bg.png')}></Image>
                </View>
                {bottomLineView}
            </View>);
    }
}

//控件的调用样式
const styles = StyleSheet.create({
    container: {
        width:screenWidth,
        height:scale * 74,
        backgroundColor:'#ffffff',
        flexDirection: 'row',
        alignItems:'center',
    },
    blackTitle: {
        color:'#4A4A4A',
        fontSize: 16,
        textAlign: 'left',
        marginLeft:18,
        lineHeight:16,
        backgroundColor:'#ffffff',
        width:66,
    },
    subTitle:{
        color:'#4A4A4A',
        fontSize: 14,
        textAlign: 'left',
        lineHeight:14,
        backgroundColor:'#ffffff',
    },
    subContainer: {
        width:screenWidth - 18 - 66 - 16 - 44 - 6 - 14 - 16,
        // height:16,
        backgroundColor:'#ffffff',
        marginLeft:16,
    },
    headIamge:{
        width:44,
        height:44,
        borderRadius:22,
        marginLeft:0,
        backgroundColor:'#ffffff'
    },
    rightArrow:{
        backgroundColor:'#C7C7CC',
        height:14,
        width:14,
        marginLeft:6
    },
    line:{
        width:screenWidth,
        height:0.5,
        backgroundColor:'#E5E5E5'
    },
    marginLine:{
        marginLeft:18,
        width:screenWidth - 18,
        height:0.5,
        backgroundColor:'#E5E5E5'
    },
});

export default Banans;