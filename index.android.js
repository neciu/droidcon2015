import React from 'react-native';
import {
    Component,
    AppRegistry,
}  from 'react-native';

import Root from './src/root';

class Droidcon2015 extends Component {
    render() {
        return (
            <Root/>
        );
    }
}

AppRegistry.registerComponent('droidcon2015', () => Droidcon2015);
