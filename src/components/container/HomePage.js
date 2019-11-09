import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    BackHandler
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getHeadlines,loadMoreNews} from '../../actions/getNews';
import {HeadlinesList} from '../presentation/HeadlinesList';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state={
            isRefreshing:false
        };
    }

    componentDidMount(){
        this.props.actions.getHeadlines();
        this.backHandler = BackHandler.addEventListener('hardwareBackPress',() => BackHandler.exitApp())
    }

    componentDidUpdate(prevProps){
        let {getHeadlinesResponse} = this.props;
        if(prevProps.getHeadlinesResponse.page !== getHeadlinesResponse.page){
            this.setState({isRefreshing:false})
        }
    }

    loadMoreNews = () => {
        let {getHeadlinesResponse} = this.props; 
        this.setState({isRefreshing:true});    
        this.props.actions.loadMoreNews(parseInt(getHeadlinesResponse.page)+1);
    }

    componentWillUnmount(){
        this.backHandler.remove();
    }

    render(){
        const {getHeadlinesResponse,actions} = this.props;
        
        if(getHeadlinesResponse.type === "LOADING" && !getHeadlinesResponse.data.length){
            return (
                <View style={styles.basicScreen}>
                    <ActivityIndicator size="large"/>         
                </View>
            );
        }
        
        if(getHeadlinesResponse.type === "FAILURE"){
            return (
                <View style={styles.basicScreen}>
                    <Text style={styles.text}>Oops!!! Could not fetch the news for you. Please Check your connection and restart the application.</Text>
                </View>
            )
        }
        return (
            <View style={styles.basicScreen}>
                <HeadlinesList getHeadlinesResponse={getHeadlinesResponse} loadMoreNews={this.loadMoreNews}/> 
                {(this.state.isRefreshing) &&
                <ActivityIndicator size="large" style={styles.loader}/>}   
            </View> 
        );
    }
}

const mapStateToProps = state => {
    return {
        getHeadlinesResponse: state.getHeadlinesResponse
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({getHeadlines,loadMoreNews},dispatch) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);

const styles = StyleSheet.create({
    basicScreen:{
        flex: 1,
        backgroundColor: 'black',
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        fontSize: 22,
        color: 'white',   
        textAlign:'center'     
    },
    loader:{
        position:"absolute",
        alignSelf:'center',
    }

})
