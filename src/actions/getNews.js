import {newsapi_instance} from './apiInstance';
import * as action_types from './action_types';

export function getHeadlines(){    
    return (dispatch) => {
        dispatch({type: action_types.LOADING});

        newsapi_instance.get('/top-headlines',{
            params: {
                'country': 'in',
                page: 1
            }
        })
        .then(response => dispatch({type:action_types.SUCCESS,data:response.data.articles,page:1}))
        .catch(err => dispatch({type:action_types.FAILURE,data:err.request}));    
    }
}

export function loadMoreNews(page){
    return (dispatch) => {
        newsapi_instance.get('/top-headlines',{
            params: {
                'country': 'in',
                page: page
            }
        })
        .then(response => dispatch({type:action_types.UPDATE,data:response.data.articles,page:page}))
        .catch(err => dispatch({type:action_types.FAILURE,data:err.request}));    
    }
}