import React, { Component } from 'react';
import {
        View, Text, StyleSheet
} from 'react-native';

import { SelectLanguage } from './';

class SignUpView extends Component {
        state = {}
        render() {
                const {
                        contain
                } = styles;
                return (
                        <View style={contain}>
                                <SelectLanguage />
                        </View>
                );
        }
}

const styles = StyleSheet.create({
        contain: {
                flex: 1,
        }
});

export default SignUpView;
