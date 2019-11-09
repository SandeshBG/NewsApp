import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class NewsPage extends Component{
    render(){
        const {url} = this.props;

        return(
            <WebView 
                source={{uri:url}}/>
        );
    }
}