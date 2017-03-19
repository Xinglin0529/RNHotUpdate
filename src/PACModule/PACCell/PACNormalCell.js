/**
 * Created by songhongxi271 on 17/3/16.
 */

var screenWidth = require('Dimensions').get('window').width;
var scale = (screenWidth/375.0).toFixed(2);

import React, { Component} from  'react';
import {AppRegistry, Image, View, StyleSheet, Text} from 'react-native';

class  PACNormalCell extends  Component {
    render(){
        //获取需要展示的信息
        var leftImage = this.props.leftImage?this.props.leftImage:"";

        var title = this.props.title?this.props.title:"";
        var subTitle = this.props.subTitle?this.props.subTitle:"";
        var detail = this.props.detail?this.props.detail:"";

        var showTopLine = this.props.showTopLine?this.props.showTopLine:false;
        var topLineHasMargin = this.props.topLineHasMargin?this.props.topLineHasMargin:false;

        var showBottomLine = this.props.showBottomLine?this.props.showBottomLine:false;
        var bottomLineHasMargin = this.props.bottomLineHasMargin?this.props.bottomLineHasMargin:false;
        //顶部边线
        var topLineView;
        if(showTopLine && topLineHasMargin == true) {
            topLineView = <View style={styles.leftMarginLine}></View>;
        }else if(showTopLine && topLineHasMargin == false){
            topLineView = <View style={styles.line}></View>;
        }

        //底部边线
        var bottomLineView;
        if(showBottomLine && bottomLineHasMargin) {
            bottomLineView = <View style={styles.leftMarginLine}></View>;
        }else if(showBottomLine && bottomLineHasMargin == false){
            bottomLineView = <View style={styles.line}></View>;
        }

        var textView;

        if(title && subTitle) {
            textView = <View style={{justifyContent:'flex-start'}}>
                <Text style={{fontSize:16,color:'#4A4A4A'}}>{title}</Text>
                <Text style={{fontSize:14,color:'#9B9B9B',marginTop:6}}>{subTitle}</Text>
            </View>;
        }else  {
            title = title?title:subTitle;
            textView = <View><Text style={{fontSize:16,color:'#4A4A4A'}}>{title}</Text></View>;
        }

        //判断是否有
        var iconView;
        var rightContainerView;

        if(leftImage){
            iconView = <Image style={styles.iconContainerStyle} source={leftImage}></Image>;
            rightContainerView = <View style={styles.iconRightContainer}>
                {textView}
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:17,color:'#0677DA',marginRight:6}}>{detail}</Text>
                    <Image style={styles.rightArrow} source={require('./img/cart_badge_bg.png')}></Image>
                </View>
            </View>;
        }else {
            rightContainerView = <View style={styles.noIconContainer}>
                {textView}
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:17,color:'#0677DA',marginRight:6}}>{detail}</Text>
                    <Image style={styles.rightArrow} source={require('./img/cart_badge_bg.png')}></Image>
                </View>
            </View>;
        }

        //标题
        return (
            <View>
                {topLineView}
                <View style={styles.container}>
                    {iconView}
                    {rightContainerView}
                </View>
                {bottomLineView}
            </View>
        );
    }
}

//控件的调用样式
const styles = StyleSheet.create({
    container: {
        width:screenWidth,
        height:scale * 74 - 1,
        backgroundColor:'#ffffff',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    iconContainerStyle:{
        width:28,
        height:28,
        marginLeft:18
    },
    iconContainerStyle:{
        width:28,
        height:28,
        marginLeft:18
    },
    iconRightContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:screenWidth - 18 - 28 - 6,
        marginLeft:6,
    },
    noIconContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:screenWidth - 18,
        marginLeft:18,
    },
    rightArrow:{
        backgroundColor:'#C7C7CC',
        height:14,
        width:14,
        marginLeft:6,
        marginRight:16
    },
    line:{
        width:screenWidth,
        height:0.5,
        backgroundColor:'#E5E5E5'
    },
    leftMarginLine:{
        marginLeft:18,
        width:screenWidth - 18,
        height:0.5,
        backgroundColor:'#E5E5E5'
    },
});

export default PACNormalCell;