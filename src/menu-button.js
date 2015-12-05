import React from 'react-native';
import {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
} from 'react-native';

export default class MenuButton extends Component {
    render() {
        return (
            <View style={{width: 150, height: 40}}>
                <TouchableNativeFeedback
                    style={{flex:1}}
                    background={TouchableNativeFeedback.Ripple('#333', false)}
                    onPress={this.props.onPress}>
                    <View style={{flex:1, justifyContent:'center', padding: 8}}>
                        <Text>{this.props.title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}
