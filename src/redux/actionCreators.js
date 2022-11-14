import * as actionTypes from './actionTypes';

export const addPlace = place => dispatch => {
    fetch("https://my-places-dcd23-default-rtdb.firebaseio.com/places.json", {
        method: "POST",
        body: JSON.stringify(place)
    })
        .catch(error => console.log(error))
        .then(response => response.json())
        .then(data => console.log(data));
}


export const deletePlace = key => {
    return {
        type: actionTypes.DELETE_PLACE,
        payload: key
    }
}