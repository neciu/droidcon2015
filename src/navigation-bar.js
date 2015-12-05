import React from 'react-native';
import {
    Component,
    StyleSheet,
    View,
    TouchableNativeFeedback,
    Image,
    Text,
} from 'react-native';

export default class NavigationBar extends Component {
    render() {
        return (
            <View style={styles.navigatorBar}>
                <TouchableNativeFeedback
                    onPress={this.props.onBurgerPress}
                    background={TouchableNativeFeedback.Ripple('#eee', false)}>
                    <View style={{margin: 4, padding: 4}}>
                        <Image source={require('../img/burger.png')} style={{width: 30, height: 30}}/>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.navigationTitleWrapper}>
                    <Text style={styles.navigationTitle}>{this.props.title}</Text>
                </View>
            </View>
        );
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