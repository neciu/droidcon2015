import React from 'react-native';
import {
    Component,
    StyleSheet,
    View,
    Navigator,
    TouchableOpacity,
    Text,
} from 'react-native';

import Main from './main';

export default class Root extends Component {
    render() {
        return (
            <Navigator
                style={{flex: 1}}
                initalRoute={{name: 'Hello Droidcon 2015!', index: 0}}
                renderScene={(route, navigator) => {
                    <Main style={{flex:1}}/>
                }}
                navigationBar={
                    this._renderNavigationBar()
                }
            />
        );
    }

    _renderNavigationBar() {
        return (
            <View style={styles.navigatorBar}>
                <Text>dsds</Text>
            </View>
        );
    }
}


const NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
        return null;
        //return (
        //    <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
        //                      onPress={() => {
        //                        navigator.props.navigationBar.props.onExit();
        //                      }}>
        //        <Text style={{margin: 10}}>
        //            Back
        //        </Text>
        //    </TouchableOpacity>
        //);
    },
    RightButton(route, navigator, index, navState) {
        return null;
    },
    Title(route, navigator, index, navState) {
        console.log(route);
        console.log(navigator);
        console.log(index);
        console.log(navState);

        return (
            <View style={styles.navigationTitleWrapper}>
                <Text style={styles.navigationTitle}>
                    {route.title}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    navigatorBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: '#555'
    },
    navigationTitleWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    navigationTitle: {
        color: '#eee',

    }
});