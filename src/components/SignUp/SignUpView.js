import { Icon } from 'react-native-elements';
import React, { Component } from 'react';
import {
    Image, Dimensions,
    View, Text, ToastAndroid, TouchableOpacity,
} from 'react-native';

import { styles } from '../../config';
import SignUpForm from './SignUpForm';


const { width, height } = Dimensions.get('window');
class SignUpView extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        passwordc: '',
        displayname: '',
    }
    onPressBtnPrevious = () => {
        this.props.navigation.goBack();
    }
    onPressBtnSignUp = () => {
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    }
    render() {
        const { buttonPrevious, small } = styles;
        return (
            <View style={{ backgroundColor: 'white' }}>

                <View style={{ height: height * 0.4, backgroundColor: 'white' }}>
                    <Image
                        style={{
                            width: width * 0.8,
                            height: height * 0.45,
                            alignSelf: 'flex-end',
                            resizeMode: 'contain',
                            left: 20
                        }}
                        source={{ uri: 'https://cdn.dribbble.com/users/186169/screenshots/4107820/tom_philibeck_harden_ls_1x.jpg' }}
                    />
                    <View style={{ width: width * 0.5, height: height * 1, position: 'absolute' }} >
                        <Text
                            style={{
                                width: width * 0.3,
                                alignSelf: 'flex-end',
                                fontSize: 50,
                                fontWeight: 'bold',
                                top: 50,
                                right: 25,
                                color: 'black'
                            }}
                        >Sign Up</Text>
                    </View>
                    <TouchableOpacity
                        style={buttonPrevious}
                        onPress={this.onPressBtnPrevious}
                    >
                        <Icon
                            name='chevron-left'
                            size={45}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <SignUpForm />
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
                        <Text style={small}> Don't have ana account? </Text>
                        <TouchableOpacity
                            underlayColor='#ffb951'
                            onPress={this.onPressBtnSignUp}
                        >
                            <Text style={styles.links}> Sign Up </Text>
                        </TouchableOpacity>    
                    </View>
                </View>
            </View>
        );
    }
}


export default SignUpView;
