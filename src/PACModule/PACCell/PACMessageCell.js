/**
 * Created by songhongxi271 on 17/3/16.
 */
/**
 * Created by songhongxi271 on 17/3/16.
 */

var screenWidth = require('Dimensions').get('window').width;
var scale = (screenWidth/375.0).toFixed(2);

import React, { Component} from  'react';
import {AppRegistry, Image, View, StyleSheet, Text} from 'react-native';

class  PACMessageCell extends  Component {
    render(){
        //获取需要展示的信息
        var defaultImage = this.props.defaultImage?this.props.defaultImage:"";

        var title = this.props.title?this.props.title:"";
        var subTitle = this.props.subTitle?this.props.subTitle:"";

        var showTopLine = this.props.showTopLine?this.props.showTopLine:false;
        var topLineHasMargin = this.props.topLineHasMargin?this.props.topLineHasMargin:false;

        var showBottomLine = this.props.showBottomLine?this.props.showBottomLine:false;
        var bottomLineHasMargin = this.props.bottomLineHasMargin?this.props.bottomLineHasMargin:false;

        var isRead = this.props.isRead?this.props.isRead:false;

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

        var leftView;
        var textView;

        if(isRead){
            leftView = <View style={{width:62,height:54,alignItems:'center',flexDirection:'row'}}>
                    <Image style={styles.iconContainerStyle} source={defaultImage}></Image>
                    <View style={styles.radiusRead}></View>
                </View>;
            textView = <View style={{width:screenWidth-62-60,height:54,alignItems:'flex-start',flexDirection:'column',justifyContent:'flex-start'}}>
                    <Text style={styles.titleRead}>{title}</Text>
                    <Text style={styles.subTitleRead}>{subTitle}</Text>
                </View>;
        }else {
            leftView = <View style={{width:62,height:54,alignItems:'center',flexDirection:'row'}}>
                    <Image style={styles.iconContainerStyle} source={defaultImage}></Image>
                    <View style={styles.radiusUnRead}></View>
                </View>;

            textView = <View style={{width:screenWidth-62-60,height:54,alignItems:'flex-start',flexDirection:'column',justifyContent:'flex-start'}}>
                    <Text style={styles.titleUnRead}>{title}</Text>
                    <Text style={styles.subTitleUnRead}>{subTitle}</Text>
                </View>;
        }

        // FF6600
        //标题
        return (
            <View>
                {topLineView}
                <View style={styles.container}>
                    {leftView}
                    {textView}
                    <View style={{width:60,height:54}}>
                        <Text style={styles.date}>03-15</Text>
                    </View>
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
    radiusRead:{
        marginLeft:-5,
        marginTop:-12,
        height:8,
        width:8,
        borderRadius:4
    },
    radiusUnRead:{
        backgroundColor:'#FF6600',
        marginLeft:-5,
        marginTop:-12,
        height:8,
        width:8,
        borderRadius:4,
    },
    titleRead:{
        marginTop:8,
        color:'#BBBBBB',
        fontSize:16,
    },
    subTitleRead:{
        marginTop:8,
        color:'#BBBBBB',
        fontSize:14,
    },
    titleUnRead:{
        marginTop:8,
        color:'#2A2A2A',
        fontSize:16,
    },
    subTitleUnRead:{
        marginTop:8,
        color:'#2A2A2A',
        fontSize:14,
    },
    // textUnRead:{
    //     marginTop:8,
    //     color:'#2A2A2A'
    // },
    // textRead:{
    //     marginTop:8,
    //     color:'#BBBBBB'
    // },
    date:{
        marginTop:8,
        color:'#BBBBBB',
        fontSize:14,
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

export default PACMessageCell;