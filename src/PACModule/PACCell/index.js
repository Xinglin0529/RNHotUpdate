/**
 * Created by songhongxi271 on 17/3/14.
 */

import React, { Component } from 'react';
import {AppRegistry,View} from 'react-native';

import PACHeadImageCell from "./PACHeadImageCell";
import PACNormalCell from "./PACNormalCell";
import PACDefaultLayoutCell from './PACDefaultLayoutCell';
import PACMessageCell from './PACMessageCell';

class PACCell extends Component {
    render() {
        const headerImageCellProps = {
            title:'主标题',
            subTitle:'副标题副标题副标题',
            showTopLine:true,
            showBottomLine:true,
            topLineHasMargin:true,
            bottomLineHasMargin:false,
        };

        const normalCellProps = {
            leftImage:require('./img/cart_badge_bg.png'),
            title:'招商银行',
            subTitle:'6287 **** **** 2984',
            detail:'19928.27',
            showTopLine:false,
            topLineHasMargin:true,
            showBottomLine:true,
            bottomLineHasMargin:false,
        };

        const defaultCellProps = {
            title:'招商银行',
            // subTitle:'6287 **** **** 2984',
            // detail:'19928.27',
            showTopLine:false,
            topLineHasMargin:true,
            showBottomLine:true,
            bottomLineHasMargin:false,
            displayArrow:false,
            text:'招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行招商银行'
        };

        const messageProps = {
            defaultImage:require('./img/cart_badge_bg.png'),
            title:"消息名称",
            subTitle:"这里是消息的描述信息",
            messageDate:'年月日是分秒的消息',
            isRead:false,
            showTopLine:true,
            topLineHasMargin:true,
            showBottomLine:true,
            bottomLineHasMargin:false,
        };

        return (<View style={{marginTop:20}}>
                    <PACHeadImageCell {...headerImageCellProps}></PACHeadImageCell>
                    <PACNormalCell {...normalCellProps}></PACNormalCell>
                    <PACDefaultLayoutCell {...defaultCellProps}></PACDefaultLayoutCell>
                    <PACMessageCell {...messageProps}></PACMessageCell>
            </View>
        );
   	}
}

AppRegistry.registerComponent('PACCell', () => PACCell);

export default PACCell;