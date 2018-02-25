import React, { Component } from 'react';
import { TabNavigator, indicatorStyle } from 'react-navigation';
import {
    Dimensions,
    View, Text, ToastAndroid, TouchableOpacity,
} from 'react-native';
import { styles } from '../../config';
import SignUpwithEmail from './SignUpwithEmail';
import SignUpwithPhone from './SignUpwithPhone';

const BasicApp = TabNavigator({
    Email: { screen: SignUpwithEmail },
    Phone: { screen: SignUpwithPhone },
}, {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            //pressColor: 'gray',
            indicatorStyle: {
                backgroundColor: 'black'
            },
            style: {
                backgroundColor: 'transparent',

            },
        },
    });

const { width, height } = Dimensions.get('window');
export default class SignUpForm extends Component {
    state = {
        username: '',
        password: '',
    }
    onPressBtnLogIn = () => {
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    }
    render() {
        const { form, small, } = styles;
        return (
            <View style={form}>
                <View style={{ height: height * 0.2 }}>
                    <BasicApp />
                </View>
                <View style={{ height: height + 1, }}>

                    <Text style={small}>
                        By clicking "Sign up " you agreed
                            with all of our terms and conditons.
                        </Text>
                    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                        <View style={{ width: width * 0.6 }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.onPressBtnLogIn}
                            >
                                <Text style={styles.buttonText}>Sign Up</Text>
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
            </View >
        );
    }
}

