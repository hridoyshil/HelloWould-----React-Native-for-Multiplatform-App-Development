import * as actionTypes from './actionTypes';
import { navigate } from '../../App';

export const addPlace = place => dispatch => {
    fetch("https://my-places-dcd23-default-rtdb.firebaseio.com/places.json", {
        method: "POST",
        body: JSON.stringify(place)
    })
        .catch(error => console.log(error))
        .then(response => response.json())
        .then(data => console.log(data));
}

export const setPlaces = places => {
    return {
        type: actionTypes.SET_PLACES,
        payload: places
    }
}

export const loadPlaces = () => dispatch => {
    fetch("https://my-places-dcd23-default-rtdb.firebaseio.com/places.json")
        .catch(err => {
            alert("Something went wrong, sorry");
            console.log(err);
        })
        .then(res => res.json())
        .then(data => {
            const places = [];
            for (let key in data) {
                places.push({
                    ...data[key],
                    key: key
                })
            }
            dispatch(setPlaces(places));
        });
}


export const deletePlace = key => {
    return {
        type: actionTypes.DELETE_PLACE,
        payload: key
    }
}

export const authUser = () => {
    return {
        type: actionTypes.AUTHENTICATE_USER
    }
}

export const trySignUp = (email, password) => dispatch => {
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFZskQkSD3mNEVVWC-qVOPpjrFcZk4JMk", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .catch(err => {
            console.log(err);
            alert("Authentication Failed!");
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                alert(data.error.message);
            } else {
                navigate("Home");
                dispatch(authUser());
            }
            console.log(data)
        })

}