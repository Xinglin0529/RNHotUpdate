/**
 * Created by xudongdong121 on 17/3/16.
 */
import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import {PACNavigatorBar} from '../PACNavigator';
const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

class PACComponent extends Component {

    /* 设置navigatorBar时会用到的属性 */

    title = undefined;
    titleImage = undefined;
    leftTitle = undefined;
    leftImage = undefined;
    rightTitle = undefined;
    rightImage = undefined;
    rightArray = [];// image , title, route
    backgroundColor = undefined;
    foregroundColor = undefined;
    itemColor = undefined;
    backgroundImage = undefined;
    isAbsolute = false;
    isTransparent = false;

    static propTypes = {
        route: React.PropTypes.object,
        navigator: React.PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.leftButton = this.leftButton.bind(this);
        this.rightButton = this.rightButton.bind(this);
        this.titleView = this.titleView.bind(this);
        this.rightButtonAction = this.rightButtonAction.bind(this);
        this.leftButtonAction = this.leftButtonAction.bind(this);
        this._renderContentView = this._renderContentView.bind(this);

        if (props.route) {
            props.route.component = this;
        }
    }

    componentWillMount() {
        this.dispatchComponentWillMount && this.dispatchComponentWillMount();
    }

    // 继承base之后触发willMount
    dispatchComponentWillMount() {
        // do nothing
    }

    contentView() {
        return <View />;
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'transparent' }}>
                {this._renderContentView()}
            </View>
        );
    }

    _renderContentView() {
        let content = <View />;
        if (this.isAbsolute) {
            content =
                <View>
                    <View style={{ position: 'absolute', top: 0, height: Height, width: Width }}>
                        {this.contentView()}
                    </View>
                    <PACNavigatorBar
                        backgroundColor={this.backgroundColor}
                        foregroundColor={this.foregroundColor}
                        itemColor={this.itemColor}
                        backgroundImage={this.backgroundImage}
                        isTransparent={this.isTransparent}
                        title={this.title}
                        titleView={this.titleView()}
                        titleImage={this.titleImage}
                        leftTitle={this.leftTitle}
                        leftImage={this.leftImage}
                        leftView={this.leftButton()}
                        onLeftClick={this.leftButtonAction}
                        rightTitle={this.rightTitle}
                        rightImage={this.rightImage}
                        rightArray={this.rightArray}
                        rightView={this.rightButton()}
                        onRightClick={this.rightButtonAction}
                        navigator={this.props.navigator}
                        hideNavBar={this.props.route.props.hideNavBar}
                    />
                </View>
        }else{
            content =
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <PACNavigatorBar
                        backgroundColor={this.backgroundColor}
                        backgroundImage={this.backgroundImage}
                        title={this.title}
                        titleView={this.titleView()}
                        titleImage={this.titleImage}
                        leftTitle={this.leftTitle}
                        leftImage={this.leftImage}
                        leftView={this.leftButton()}
                        onLeftClick={this.leftButtonAction}
                        rightTitle={this.rightTitle}
                        rightImage={this.rightImage}
                        rightArray={this.rightArray}
                        onRightClick={this.rightButtonAction}
                        navigator={this.props.navigator}
                        rightView={this.rightButton()}
                        hideNavBar={this.props.route.props.hideNavBar}
                    />
                    {this.contentView()}
                </View>
        }
        return content;
    }

    titleView() {
        return undefined;
    }

    leftButton() {
        return undefined;
    }

    rightButton() {
        return undefined;
    }

    leftButtonAction() {

    }

    rightButtonAction(index) {

    }
}

export default PACComponent;