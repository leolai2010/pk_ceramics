import _ from 'lodash';
import { FETCH_CERAMICS } from '../actions';

export default function(state={}, action){
    switch(action.type){
        case FETCH_CERAMICS:
            return _.mapKeys(action.payload.data, 'id')
        default:
            return state;
    }
}