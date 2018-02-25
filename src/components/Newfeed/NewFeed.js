import React, { Component } from 'react';
import { Icon, Header } from 'react-native-elements';
import {
    Image, Dimensions,
    View, Text, KeyboardAvoidingView, TouchableOpacity,
} from 'react-native';
import { styles } from '../../config';
import { Feed } from './';

const { width, height } = Dimensions.get('window');
const h = height;

export default class NewFeed extends Component {
    state = {
    }

    render() {
        const { small, } = styles;
        return (
            <View style={{ backgroundColor: 'white' }}>
                <Header
                    backgroundColor='transparent'
                    outerContainerStyles={{ height: height * 0.085, borderBottomWidth: 1, borderBottomColor: '#dddbd7' }}
                    leftComponent={{ icon: 'radio-button-checked', color: '#303030' }}
                    centerComponent={{ text: 'Pintagram', style: { color: '#303030', fontWeight: 'bold', fontSize: 18 } }}
                    rightComponent={{ icon: 'question-answer', color: '#303030' }}
                />
            </View>
        );
    }
}

