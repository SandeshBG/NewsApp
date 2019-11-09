import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import {HeadLinesItems} from './HeadLinesItem';

export class HeadlinesList extends Component{
    headlinesBody = (article) => (
        <HeadLinesItems 
            title={article.item.title}
            description={article.item.description}
            img_url={article.item.urlToImage}
            url={article.item.url}
        />
    )
    
    render(){
        const {getHeadlinesResponse,loadMoreNews} = this.props;

        return (
            (getHeadlinesResponse.type === "SUCCESS" || getHeadlinesResponse.type === "UPDATE") && getHeadlinesResponse.data &&
                <FlatList 
                    data={getHeadlinesResponse.data}
                    renderItem={this.headlinesBody}
                    keyExtractor={(item,index) => item.title}
                    contentContainerStyle={styles.flatListContainer}
                    ItemSeparatorComponent={()=> (<View style={styles.seperator}/>)}
                    onEndReached={loadMoreNews}
                />
        );
    }
}

const styles = StyleSheet.create({
    flatListContainer:{
        backgroundColor:'white'
    },
    seperator:{
        backgroundColor:'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
})