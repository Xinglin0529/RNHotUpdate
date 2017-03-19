/**
 * Created by xudongdong121 on 17/3/16.
 */
import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, Platform } from 'react-native';
import PACBarView from './PACBarView';
const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftButtonContainer: {
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: isIOS ? 10 : 0,
    },
    rightButtonContainer: {
        flexDirection: 'row',
        paddingRight: 5,
        marginTop: isIOS ? 10 : 0,
    },
    textPaddingTopAndBottom: {
        paddingTop: 14,
        paddingBottom: 8,
        textAlign: 'center',
        alignSelf: 'center',
    },
    rightText: {
        fontSize: 16,
        color: '#4A4A4A',
        marginLeft: 5,
        // marginRight: 14,
        marginTop: isIOS ? 20 : 12,
        paddingBottom: 14,
        alignSelf: 'center',
    },
    rightImage: {
        marginTop: isIOS ? 6 : 3,
        width: 20,
        height: 20,
    },
    titleText: {
        fontSize: 18,
        color: '#4A4A4A',
        paddingTop: 12,
        paddingBottom: 8,
        textAlign: 'center',
    },
    titleImage: {
        width: 133,
        height: 32,
    },
    backImage: {
        marginTop: 14,
        marginLeft: 10,
        marginBottom: 14,
        marginRight: 14,
        width: 10,
        height: 16,
    },
    backText: {
        marginLeft: 14,
        marginRight: 5,
        fontSize: 16,
        color: '#4A4A4A',
    },
    paddingRight: {
        paddingRight: 5,
    },
});

class PACNavigatorBar extends Component {
    static propTypes = {
        backgroundColor: React.PropTypes.string,
        foregroundColor: React.PropTypes.string,
        itemColor: React.PropTypes.string,
        backgroundImage: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.number,
        ]),

        title: React.PropTypes.string,
        titleView: React.PropTypes.node,
        titleImage: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.number,
        ]),

        leftTitle: React.PropTypes.string,
        leftImage: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.number,
        ]),
        leftView: React.PropTypes.node,
        onLeftClick: React.PropTypes.func,

        rightTitle: React.PropTypes.string,
        rightImage: React.PropTypes.string,
        rightArray: React.PropTypes.array,
        rightView: React.PropTypes.node,
        onRightClick: React.PropTypes.func,

        navigator: React.PropTypes.object,
        isTransparent: React.PropTypes.bool,
        hideNavBar: React.PropTypes.bool,
    };

    render() {
        const { hideNavBar } = this.props;
        return (
            <PACBarView
                backgroundColor={this.props.backgroundColor}
                backgroundImage={this.props.backgroundImage}
                isTransparent={this.props.isTransparent}
                contentView={this.renderBar()}
                hideNavBar={hideNavBar}
            />
        );
    }

    renderBar() {
        // 导航栏标题部分
        let content = <View />;
        if (this.props.title) {
            content = <Text numberOfLines={1} style={[styles.titleText, this.props.foregroundColor && { color: this.props.foregroundColor }]}>{this.limitShowText(this.props.title)}</Text>;
        } else if (this.props.titleImage) {
            content = this._createImageWithImgAndStyle(this.props.titleImage, styles.titleImage);
        } else if (this.props.titleView) {
            content = this.props.titleView;
        }

        // 导航栏左侧部分
        let item = <View />;
        if (this.props.leftView) {
            item = this.props.leftView;
        } else if (this.props.leftTitle) {
            item = <Text style={[styles.backText, styles.textPaddingTopAndBottom, this.props.itemColor && { color: this.props.itemColor }]}>{this.props.leftTitle}</Text>;
        } else if (this.props.leftImage) {
            item = this._createImageWithImgAndStyle(this.props.leftImage, styles.backImage);
        }

        // 导航栏右侧部分
        let rightContent = <View />;
        let list = [];
        if (this.props.rightView) {
            rightContent = this.props.rightView;
        } else {
            if (this.props.rightArray.length === 0) {
                const single = { image: this.props.rightImage, title: this.props.rightTitle };
                this.props.rightArray.push(single);
            }
            const last = this.props.rightArray.length;
            list = this.props.rightArray.map((p, i) => {
                const { image, title } = p;
                const padStyle = i === last - 1 ? {} : styles.paddingRight;
                const marginRight = i === last - 1 ? 14 : 0;
                if (title) {
                    rightContent = <Text style={[styles.rightText, {marginRight}, this.props.itemColor && { color: this.props.itemColor }]}>{this.limitShowText(title)}</Text>;
                } else if (image) {
                    const imageStyle = [styles.rightImage, {marginRight}];
                    rightContent = this._createImageWithImgAndStyle(image, imageStyle);
                }
                return (
                    <TouchableOpacity key={i} style={padStyle}
                                      onPress={() => { title || image ? this.props.onRightClick && this.props.onRightClick(i) || this._rightButtonAction(i) : ''; }}>
                        {rightContent}
                    </TouchableOpacity>
                );
            });
        }

        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent' }}>
                {this._renderLeftView(item)}
                {this._renderTitleView(content)}
                <View style={[styles.rightButtonContainer, styles.center, { flex: 1, justifyContent: 'flex-end', backgroundColor: 'transparent', alignSelf: 'center'  }]}>
                    {list.length > 0 ? list : rightContent}
                </View>

            </View>
        );
    }

    _renderLeftView(content) {
        let leftView = <View />;
        if (this.props.leftView) {
            leftView = content;
        } else {
            leftView = <View style={[styles.leftButtonContainer, styles.center, { flex: 1, justifyContent: 'flex-start', backgroundColor: 'transparent' }]}>
                <TouchableOpacity
                    onPress={() => { this.props.leftTitle || this.props.leftImage ? this.props.onLeftClick && this.props.onLeftClick() || this._leftButtonAction() : ''; }}>
                    {content}
                </TouchableOpacity>
            </View>
        }

        return leftView;
    }

    _renderTitleView(content) {
        let titleView = <View />;
        if (this.props.titleView) {
            titleView = content;
        } else {
            titleView = <View style={[styles.center, { flex: 1, backgroundColor: 'transparent', paddingTop: isIOS ? 10 : 20 }]}>
                {content}
            </View>
        }

        return titleView;
    }

    _createImageWithImgAndStyle(img, imgStyle) {
        let imgSource = <View />;
        if (img) {
            imgSource = <Image source={img} style={imgStyle}/>;
        }
        return imgSource;
    }

    _leftButtonAction() {
        if (this.props.navigator) {
            this.props.navigator.pop();
        }
    }

    _rightButtonAction(index) {
        if (this.props.navigator) {
            if (this.props.rightArray.length) {
                const { route } = this.props.rightArray[index];
                if (route && route.screen) {
                    this.props.navigator.push(route);
                }
            }
        }
    }

    limitShowText(textStr) {
        const chinese = (this.getStringLength(textStr) - textStr.length);
        const english = textStr.length - chinese;
        const realLength = chinese >= 5 ? 5 : (chinese + english / 2.0);
        let rightStr = realLength < 5 ? textStr : textStr.substring(0, realLength);
        if (chinese === 0) {
            rightStr = textStr.substring(0, 12);
        }
        return rightStr;
    }

    getStringLength(str) {
        // 先把中文替换成两个字节的英文，在计算长度
        return str.replace(/[^\x00-\xff]/g, 'Aa').length;
    }
}

export default PACNavigatorBar;