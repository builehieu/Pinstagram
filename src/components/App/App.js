import React, { Component } from 'react';

import { LogInView } from '../LogIn';
import { NewFeedView } from '../Newfeed';

export default class App extends Component {
        render() {
                return (
                        <NewFeedView />
                );
        }
}
