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
        phone: '',
    }
    render() {
        const { textInput, } = styles;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ height: height + 50, top: 25 }}>
                    <TextInput
                        style={textInput}
                        placeholder="Phone number"
                        keyboardType='phone-pad'
                        returnKeyType="done"
                        ref={(input) => (this.emailInput = input)}
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({ phone: text })}
                    />
                </View>
            </View>

        );
    }
}

