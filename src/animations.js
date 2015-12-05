import React from 'react-native';
import {
    Component,
    StyleSheet,
    View,
    Text,
    Animated,
    TouchableNativeFeedback,
} from 'react-native';

const BOX_SIZE = 50;

export default class AnimationsView extends Component {
    constructor() {
        super();
        this.state = {
            x: new Animated.Value(0),
            onRight: false,
            boxWrapperWidth: 0,
            imageScale: new Animated.Value(1),
            angle: new Animated.Value(0),
        };
    }

    render() {
        let color = this.state.x.interpolate({
                inputRange: [-99999, 0, this.state.boxWrapperWidth? this.state.boxWrapperWidth - BOX_SIZE : 1, 99999],
                outputRange: ['rgb(111, 103, 253)', 'rgb(111, 103, 253)', 'rgb(255, 0, 255)', 'rgb(255, 0, 255)']
            });

        return (
            <View style={{flex: 1, padding: 12}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{color: '#eee', fontSize:20}}>Just a Box...</Text>
                </View>
                <View
                    style={{marginTop: 10, marginBottom: 10, overflow: 'visible'}}
                    onLayout={this._boxWrapperLiedOut.bind(this)}>
                    <Animated.View style={[styles.movingBox, {left: this.state.x}]}/>
                </View>
                <View>
                    <TouchableNativeFeedback
                        background={TouchableNativeFeedback.Ripple('#555', false)}
                        onPress={this._toggleBoxPosition.bind(this)}>
                        <View style={{padding: 10, alignItems: 'center', backgroundColor: '#eee'}}>
                            <Text style={{color: '#333'}}>Press To Move The Box</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={{color: '#eee', fontSize:20}}>Interpolating X To Color</Text>
                </View>
                <Animated.View style={[styles.colorfulBox, {backgroundColor: color}]}/>
            </View>
        );
    }

    _boxWrapperLiedOut(event) {
        this.setState({
            boxWrapperWidth: event.nativeEvent.layout.width
        })
    }

    _toggleBoxPosition() {
        this.setState({
            onRight: !this.state.onRight
        });

        Animated.spring(
            this.state.x,
            {
                toValue: this.state.onRight ? this.state.boxWrapperWidth - BOX_SIZE : 0,
                duration: 800,
                friction: 6
            }
        ).start();
    }
}

const styles = StyleSheet.create({
    movingBox: {
        backgroundColor: '#E64D7D',
        width: BOX_SIZE,
        height: BOX_SIZE,

    },
    colorfulBox: {
        marginTop: 10,
        height: 100,
    }
});