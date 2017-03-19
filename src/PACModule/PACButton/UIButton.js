import React, { Component, PropTypes } from 'react';
import { 
	View, 
	Text, 
    Image,
	TouchableOpacity, 
	StyleSheet 
} from 'react-native';

class UIButton extends Component {
	constructor(props) {

		super(props);
		this.state = {
            status: 'link',
        };

		this._onPress 		= this._onPress.bind(this);
        this._onPressIn 	= this._onPressIn.bind(this);
        this._onPressOut 	= this._onPressOut.bind(this);
	}


    _onPress(e) {
        if (this.props.onPress) {
            this.props.onPress(e);
        }
    }

    _onPressIn(e) {
        this.setState({
            status: 'active',
        });
        if (this.props.onPressIn) {
            this.props.onPressIn(e);
        }
    }
    _onPressOut(e) {
        this.setState({
            status: 'link',
        });
        if (this.props.onPressOut) {
            this.props.onPressOut(e);
        }
    }


	


    render() {
    	const { h,w,bgColor,imgFilePath,imgUri,textString} = this.props;


    	// TouchableWithoutFeedback在0.20尚未支持 disabled 属性
    	const touchProps = {
            		pressRetentionOffset: { top: 0, left: 0, right: 0, bottom: 0 },
            		onPress: this._onPress,
            		onPressIn: this._onPressIn,
            		onPressOut: this._onPressOut,
        };

                
                
 		return (
            <TouchableOpacity
                {...touchProps}>
                <View style={{ width:w,height:h,backgroundColor:bgColor,}}>

                    <Image  style={{position:'absolute', width:w,height:h,}}
                            resizeMode={Image.resizeMode.contain}
                            source={imgFilePath} />
                    <Text style={   normalStyle.base,
                                    normalStyle.text
                                }>
                    {textString}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }


}

const normalStyle = StyleSheet.create({
    base: {
        position:'absolute',
    },

    text: {
        left:0,
        top:30,
        backgroundColor:'orange',
        //textAlign: 'center',
    },
});

export default UIButton;





