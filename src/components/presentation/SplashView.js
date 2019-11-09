import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Splash extends Component{
    componentDidMount(){
        setTimeout(() => Actions.home(),5000);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.splash_text}>NEWS APP</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    splash_text:{
        color: '#fff',
        fontSize: 25
    }
})