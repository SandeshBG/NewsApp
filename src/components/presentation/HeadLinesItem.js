import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';


export class HeadLinesItems extends Component{
    render(){
        const {title,description,img_url,url} = this.props;
        
        return (
            <TouchableOpacity onPress={() => Actions.news({title:url,url:url})}>
                <View style={{flex:3}}>
                    <Text style={styles.title}>{title}</Text>
                    <Image source={{uri:img_url}} style={styles.image} resizeMode={"stretch"}/>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    title:{
        color: 'black',
        fontSize: 22,
        fontWeight:"bold"
    },
    description:{
        color:'black',
        fontSize:18
    },
    image:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4
    }
})
