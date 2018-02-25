import React, { Component } from 'react';
import {
    Dimensions,
    View, Text, TextInput, ToastAndroid, TouchableOpacity,
} from 'react-native';
import { styles } from '../../config';

const { width, height } = Dimensions.get('window');
export default class LogInForm extends Component {
    state = {
        username: '',
        password: '',
    }
    onPressBtnLogIn = () => {
        if (this.state.username === 'admin' && this.state.password === '123') {
          this.props.navigation.navigate('SignUpScreen');
        } else {
            ToastAndroid.show('Username or password incorrect!', ToastAndroid.SHORT);
        }
    }
    render() {
        const { form, small, textInput, } = styles;
        return (
            <View style={form}>
                <View style={{ height: height * 0.45, top: 0 }}>
                    <TextInput
                        style={textInput}
                        placeholder="Username"
                        autoCapitalize='none'
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
                        returnKeyType="done"
                        ref={(input) => (this.passwordInput = input)}
                        onSubmitEditing={() => this.onPressBtnLogIn}
                        secureTextEntry
                        placeholderTextColor="gray"
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => this.setState({ password: text })}
                    />
                    <View style={{ alignItems: 'center', top: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={small}> Forgot your login details? </Text>
                            <TouchableOpacity>
                                <Text style={styles.links}> Get help </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignContent: 'center', top: 15 }}>
                        <View style={{ width: width * 0.6 }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPressBtnLogIn}
                            >
                                <Text style={styles.buttonText}>Log in</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: width * 0.18 }}>
                            <TouchableOpacity
                                style={styles.button2}
                                onPress={this.onPressBtnLogIn}
                            >
                                <Text style={styles.buttonText2}>G</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

