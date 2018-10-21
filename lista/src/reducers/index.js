/*  Universidad del Valle de Guatemala
    Andrea Maria Cordon Mayen
    Carne: 16076
    incex..js
*/ 

import { combineReducers } from 'redux';

import * as types from '../types';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.CHISME_ADDED: {
            const { id } = action.payload;
            const { title } = action.payload;
            const { content } = action.payload;
            const { date } = action.payload;
            return {
                ...state,
                [id]: action.payload,
                [title]: action.payload,
                [content]: action.payload,
                [date]: action.payload,
            };
            return state;
        }
        default: return state;
    }
}

const order = (state = [], action) => {
    switch (action.type) {
      case types.CHISME_ADDED: {
        const { id } = action.payload;
  
        return [
          ...state,
          id,
          title,
          content,
          date, 
        ];
      }
      default: return state;
    }
  };

  const chisme = combineReducers({
      byId,
      order,
  });

  export const getChisme = (state, id) => state.byId[id];
  export const getChisme = (state) => state.order.map(
      id => getChisme(state, id),
  );


  export default chisme;