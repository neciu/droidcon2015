import React from 'react-native';
import {
    Component,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, padding: 12, backgroundColor: '#333'}}>
                <View style={{alignItems: 'center'}}>
                    <Image style={{width: 50, height:42.5}} source={require('../img/droidcon-logo.png')}/>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>Hello Droidcon 2015!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: '#eee',
        fontSize: 30,
    }
});