import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

class PickerExample extends Component {
        state = {}

        render() {
                return (
                        <View>
                                <Picker
                                        selectedValue={this.state.user}
                                        onValueChange={this.updateUser}
                                >
                                        <Picker.Item label="Steve" value="steve" />
                                        <Picker.Item label="Ellen" value="ellen" />
                                        <Picker.Item label="Maria" value="maria" />
                                </Picker>
                        </View>
                );
        }
}
export default PickerExample;

