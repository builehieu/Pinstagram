import React, { Component } from 'react';
import {
    Dimensions,
    View, TextInput, 
} from 'react-native';
import { styles } from '../../config';

const { width, height } = Dimensions.get('window');
export default class SignUpwithPhone extends Component {
    static navigationOptions = {
        tabBarLabel: 'Phone Number',
    };
    state = {
        username: '',
        password: '',
    }
    render() {
        const { textInput, } = styles;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height + 50, top: 25 }}>
                    <TextInput
                        style={textInput}
                        placeholder="Username"
                        keyboardType='default'
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        ref={(input) => (this.usernameInput = input)}
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({ username: text })}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Password"
                        keyboardType='default'
                        secureTextEntry
                        returnKeyType="done"
                        ref={(input) => (this.passwordInput = input)}
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                </View>
            </View>

        );
    }
}

