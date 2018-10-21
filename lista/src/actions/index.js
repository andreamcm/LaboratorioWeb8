/*  Universidad del Valle de Guatemala
    Andrea Maria Cordon Mayen
    Carne: 16076
    incex..js
*/ 

import * as types from '../types';

// Se anade la accion que crea el chisme
// Recibe titulo, id y contenido y regresa titulo, id, contenido y fecha

export const addChisme = (
    id, 
    title,
    content,
) => ({
    type: types.CHISME_ADDED,
    payload: {
        id, 
        title,
        content,
        date,
    }
});