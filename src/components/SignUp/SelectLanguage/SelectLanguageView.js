import React, { Component } from 'react';
import {
        View, Text
} from 'react-native';

import { PickerLanguage } from './';

class SelectLanguage extends Component {
        state = {}
        render() {
                return (
                        <PickerLanguage />
                );
        }
}

export default SelectLanguage;
