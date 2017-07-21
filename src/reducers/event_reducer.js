import {GET_ALL_EVENTS} from '../actions/types';
import _ from 'lodash';

export default function(state={}, action) {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return action.payload
  }
  return state;
}