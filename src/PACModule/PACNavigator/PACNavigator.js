/**
 * Created by xudongdong121 on 17/3/16.
 */
'use strict';

import React, { Component } from 'react';
import { Navigator, Platform, Dimensions, StyleSheet } from 'react-native';

const BackAndroid = require('BackAndroid');
const isAndroid = Platform.OS === 'android';
const win = Dimensions.get('window');

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#ffffff',
    },
});

class PACNavigator extends Component {
    static propTypes = {
        initialRoute: React.PropTypes.object,
        navigationBar: React.PropTypes.object,
        configureScene: React.PropTypes.func,
        renderScene: React.PropTypes.func,
        hideNavBar: React.PropTypes.bool,
        onDidFocus: React.PropTypes.func,
    };

    static defaultProps = {
        hideNavBar: false,
    };

    static configLeftToRightPopRange(range) {
        if (!isAndroid) {
            let width = 0.5 * win.width;
            if (range >= 0 && range <= 1) {
                width = range * win.width;
            }
            const pushFromRight = Navigator.SceneConfigs.PushFromRight;
            pushFromRight.gestures.pop.edgeHitWidth = width;
            return pushFromRight;
        }
        return { ...Navigator.SceneConfigs.FadeAndroid, gestures: {} };
    }

    // the navigator object
    navigator;
    backHandler;

    constructor(props) {
        super(props);
        this._renderScene = this._renderScene.bind(this);
        this._configureScene = this._configureScene.bind(this);
        this._onDidFocus = this._onDidFocus.bind(this);
        this.handleBackEvent = this.handleBackEvent.bind(this);
        this.setBackHandler = this.setBackHandler.bind(this);
        this.getCurrentRoute = this.getCurrentRoute.bind(this);
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackEvent);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackEvent);
    }

    render(){
        return (
            <Navigator
                ref={'navigator'}
                initialRoute={this.props.initialRoute}
                configureScene={this._configureScene}
                renderScene={this._renderScene}
                navigationBar={this.props.navigationBar}
                onDidFocus={this._onDidFocus}
            />
        );
    }

    _renderScene(route, navigator) {
        this.navigator = navigator;
        return this.renderScene(route, navigator);
    }

    renderScene(route, navigator) {
        if (this.props.renderScene) {
            return this.props.renderScene(route, navigator);
        }
        let Screen = route.screen;

        const routes = navigator.getCurrentRoutes();
        const len = routes.length;
        if (len === 1) {
            // handle for flagship which always exists in memory
            const props = { ...route.props, ...this.props.initialRoute.props };
            route.props = props;
        }
        route.props = { hideNavBar: this.props.hideNavBar, ...route.props } || {};
        return (
            <Screen
                navigator={navigator}
                mainNav={this}
                route={route}
                {...route.props}
            />
        );
    }

    _configureScene(route) {
        // route can have SceneConfigs, or pass configureScene from outside.
        const customizedConfig = route.SceneConfigs || this.props.configureScene;
        if (customizedConfig) {
            return customizedConfig;
        }
        return this.configureScene();
    }

    configureScene() {
        const sceneConfigs = PACNavigator.configLeftToRightPopRange(0.5);
        return sceneConfigs;
    }

    _onDidFocus(route) {
        this.props.onDidFocus && this.props.onDidFocus(route);
    }

    setBackHandler(handler) {
        this.backHandler = handler;
    }

    getCurrentRoute() {
        const routes = this.navigator && this.navigator.getCurrentRoutes();
        const index = routes.length - 1;
        return routes[index];
    }

    handleBackEvent() {
        if (this.active) {
            // if customer set the backhandler, use it. otherwise use the default behaviior
            if (this.backHandler) {
                this.backHandler();
            } else {
                this.navigator.pop();
            }
        }
    }
}
export default PACNavigator;