/**
 * Created by songhongxi271 on 17/3/16.
 */

var screenWidth = require('Dimensions').get('window').width;
var scale = (screenWidth/375.0).toFixed(2);

import React, { Component} from  'react';
import {AppRegistry, Image, View, StyleSheet, Text} from 'react-native';

class  PACDefaultLayoutCell extends  Component {
    render(){
        var title = this.props.title?this.props.title:"";
        var text = this.props.text?this.props.text:"";

        var showTopLine = this.props.showTopLine?this.props.showTopLine:false;
        var topLineHasMargin = this.props.topLineHasMargin?this.props.topLineHasMargin:false;

        var showBottomLine = this.props.showBottomLine?this.props.showBottomLine:false;
        var bottomLineHasMargin = this.props.bottomLineHasMargin?this.props.bottomLineHasMargin:false;

        var displayArrow = this.props.displayArrow?this.props.displayArrow:false;

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

        var rightContainerView;

        if(displayArrow) {
            rightContainerView = <View style={{width:screenWidth - 18 - 6 - 60,flexDirection:'row',justifyContent:'center'}}>
                    <Text numberOfLines={5} style={styles.text}>{text}</Text>
                    <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                        <Image style={styles.arrow} source={require('./img/cart_badge_bg.png')}></Image>
                    </View>
                </View>;
        }else {
            rightContainerView = <View style={{width:screenWidth - 18 - 6 - 60}}>
                <Text numberOfLines={5} style={styles.text}>{text}</Text>
            </View>;
        }

        //标题
        return (
            <View>
                {topLineView}
                <View style={styles.container}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{marginLeft:18,color:'#9B9B9B',fontSize:14}}>{title}</Text>
                    </View>
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
        backgroundColor:'#ffffff',
        flexDirection: 'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        marginTop:17,
        marginBottom:17,
        // backgroundColor:'blue',
    },
    arrow:{
        backgroundColor:'#C7C7CC',
        height:14,
        width:14,
        marginLeft:6,
        marginRight:16
    },
    text:{
        width:screenWidth - 18 - 6 - 60 - 16,
        fontSize:14,
        color:'#4A4A4A',
        // backgroundColor:'red',
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

export default PACDefaultLayoutCell;