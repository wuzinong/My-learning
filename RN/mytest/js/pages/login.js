
'use strict';
import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    Button
  } from 'react-native';

import ModalBox from 'react-native-modalbox';
import Spinner from 'react-native-spinkit';
import commonStyle from '../styles/common';
import loginStyle from '../styles/login';




const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width:"80%",
      marginBottom:10
    },
    red: {
      color: 'red',
    },
  });


class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName:"",
            password:""
        }
    }

    render(){
        return (
            <View style={[commonStyle.container]}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({userName:text})}
                    value={this.state.text}
                    placeholder="Please enter your user name"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({password:text})}
                    value={this.state.text}
                    placeholder="Please enter your password"
                />
                <View>

                </View>
            </View>
        );
    }
}

export default LoginPage