import React from 'react-native';
import {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    ListView,
    Image,
} from 'react-native';

export default class LongListView extends Component {
    constructor() {
        super();
        this.dataSource = new React.ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            people: this.dataSource.cloneWithRows([])
        }
    }

    componentDidMount() {
        // IF NO INTERNET
        //let speakers = require('./speakers.json');
        //let longList = speakers.people.concat(speakers.people).concat(speakers.people);
        //this.setState({
        //    people: this.dataSource.cloneWithRows(longList)
        //});

        fetch('https://cdn.rawgit.com/droidconpl/droidcon-2015-web/gh-pages/model/speakers.json')
            .then((response) => response.json())
            .then(response => {
                this.setState({
                    people: this.dataSource.cloneWithRows(response.people.concat(response.people).concat(response.people).concat(response.people).concat(response.people).concat(response.people))
                });
            })
            .catch(console.error)
    }

    render() {
        return (

            <View style={{flex: 1}}>
                <ListView
                    style={{flex: 1}}
                    dataSource={this.state.people}
                    renderRow={this._renderRow.bind(this)}
                    initialListSize={2}
                    pageSize={10}
                    scrollRenderAheadDistance={200}
                />
            </View>

        );
    }

    _renderRow(person) {
        return (
            <TouchableNativeFeedback
                style={{flex: 1}}
                background={TouchableNativeFeedback.Ripple('red', false)}>
                <View style={{flexDirection: 'column', padding: 10}}>
                    <Text
                        style={[styles.text, {marginTop: 10, fontSize:30}]}>{person.firstName} {person.lastName}</Text>
                    <Text style={[styles.text, {marginBottom: 10, fontSize:16}]}>{person.websiteTitle}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={{width: 50, height: 50, marginTop: 4, marginRight: 8, backgroundColor: '#ccc'}}
                            source={{uri: `http://droidcon.pl/${person.imageUrl}`}}
                        />
                        <Text style={{flex: 1, color: '#ccc'}}>{person.bio}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#eee'
    }
});