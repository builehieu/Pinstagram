import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';
import NewFeed from './NewFeed';
import Feed from './Feed';


const Navigator = StackNavigator({
    NewFeedScreen: {
        screen: NewFeed,
    },
    FeedScreen: {
        screen: Feed,
    }
},
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 400,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateY = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],
                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 1, 1],
                });

                return { opacity, transform: [{ translateY }] };
            },
        }),
    }
);

export default class NewFeedView extends Component {
    render() {
        return (
            <Navigator />
        );
    }
}

