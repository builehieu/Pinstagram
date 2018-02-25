import React, { Component } from 'react';
import {
    Image, Dimensions,
    View, Text, KeyboardAvoidingView, TouchableOpacity
} from 'react-native';
import { styles } from '../../config';
import { LogInForm } from './';

const { width, height } = Dimensions.get('window');
const h = height;

export default class LogIn extends Component {
    state = {
        username: '',
        password: '',
    }
    onPressBtnSignUp = () => {
        this.props.navigation.navigate('SignUpScreen');
    }
    render() {
        const { small, } = styles;
        return (
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1, backgroundColor: 'white', paddingTop: 25 }} >
                <View>
                    <View style={{ height: height * 0.4 }}>
                        <Image
                            style={{
                                width: width * 0.6,
                                height: height * 0.3,
                                alignSelf: 'flex-end',
                                resizeMode: 'cover',
                                left: -30,
                                top: 50
                            }}
                            source={{ uri: 'https://cdn.dribbble.com/users/1056629/screenshots/4103492/toggl_animations.gif' }}
                        />
                        <View
                            style={{
                                width: width * 0.5,
                                height: h * 0.4,
                                position: 'absolute'
                            }}
                        >
                            <Text
                                style={{
                                    width: width * 0.3,
                                    alignSelf: 'flex-end',
                                    fontSize: 50,
                                    fontWeight: 'bold',
                                    top: 50,
                                    right: 25,
                                    color: 'black',
                                }}
                            >Pintagram</Text>
                        </View>
                    </View>
                    <View >
                        <LogInForm navigation={this.props.navigation} />
                    </View>
                </View>
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTopColor: '#dddbd7',
                        borderTopWidth: 1,
                        top: 5,

                    }}
                >
                    <View style={{ flexDirection: 'row', top: 3 }}>
                        <Text style={small}> Don't have an account? </Text>
                        <TouchableOpacity
                            underlayColor='#ffb951'
                            onPress={this.onPressBtnSignUp}
                        >
                            <Text style={styles.links}> Sign Up !s </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

