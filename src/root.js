import React from 'react-native';
import {
    Component,
    StyleSheet,
    View,
    DrawerLayoutAndroid,
    Navigator,
    TouchableNativeFeedback,
    Image,
    Text,
} from 'react-native';

import NavigationBar from './navigation-bar';
import MenuButton from './menu-button';
import Main from './main';
import Animations from './animations';
import ListView from './list';

export default class Root extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Hello Droidcon 2015!'
        }
    }

    render() {
        return (
            <DrawerLayoutAndroid ref="drawer" renderNavigationView={this._renderNavigationView.bind(this)}>
                <Navigator
                    ref="navigator"
                    style={{flex: 1, paddingTop: 44, backgroundColor: '#333'}}
                    initalRoute={{name: 'Hello Droidcon 2015!', component: Main, index: 0}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.FadeAndroid
                    }}
                    renderScene={(route, navigator) => {
                        if (route && route.component) {
                            return React.createElement(route.component);
                        } else {
                            return <Main/>
                        }

                    }}
                    navigationBar={
                        <NavigationBar title={this.state.title} onBurgerPress={this._showDrawer.bind(this)}/>
                    }
                />
            </DrawerLayoutAndroid>
        );
    }

    _renderNavigationView() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <MenuButton title="Main" onPress={this._showMainView.bind(this)}/>
                <MenuButton title="Animations" onPress={this._showAnimationsView.bind(this)}/>
                <MenuButton title="Long List View" onPress={this._showListView.bind(this)}/>
            </View>
        );
    }

    _showMainView() {
        this.refs.drawer.closeDrawer();
        this.setState({
            title: 'Hello Droidcon 2015!'
        });
        this.refs.navigator.push({
            component: Main,
            name: 'Hello Droidcon 2015!',
            index: 1,
        })
    }

    _showAnimationsView() {
        this.refs.drawer.closeDrawer();
        this.setState({
            title: 'Animations'
        });
        this.refs.navigator.push({
            component: Animations,
            name: 'Animations',
            index: 1,
        })
    }

    _showListView() {
        this.refs.drawer.closeDrawer();
        this.setState({
            title: 'Long List View'
        });
        this.refs.navigator.push({
            component: ListView,
            name: 'Long List View',
            index: 1,
        })
    }

    _showDrawer() {
        this.refs.drawer.openDrawer();
    }
}

const styles = StyleSheet.create({
    navigatorBar: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 44,
        backgroundColor: '#555',
        flexDirection: 'row',
    },
    navigationTitleWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    navigationTitle: {
        color: '#eee',

    }
});