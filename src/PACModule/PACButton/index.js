/**
 * Created by songhongxi271 on 17/3/14.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';


import UIButton from './UIButton';

class PACButton extends Component {
	render()
	{
    	return (
    		<View style={{  flex: 1,
                   flexDirection: 'column',
                    paddingTop:20  ,
                    backgroundColor: '#ABABAB',}}>

                  <Text style={{margin:10, marginLeft:100,paddingRight:100,height:40,backgroundColor:'#FF0000',}}>PACButtonaaaaa</Text>
                 
                  <UIButton h={100} 
                            w={200} 
                            bgColor={'#00FF00'} 
                            imgFilePath={require('./img/abc.jpg')}
                            textString={'I\'m a button.'}
                  />
        </View>
      );

    
   	}
}

/*
<UIButton
                           text={'Button'}
                           style={styles.btn}
                           type="text"
                           textStyle={styles.text}
                           textColor={'#4A90E2' }
                           onPress={() => {
                                console.log('aaaaaab');
                            }}
                       />
                       */
const styles = StyleSheet.create({
    
    btn: {
        width: 100,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 90 / 9,
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text: {
        textAlign: 'left',
        fontSize: 14,
    },
});

AppRegistry.registerComponent('PACButton', () => PACButton);


export default PACButton;