import React from 'react';
import * as keys from '../keys/home.keys';
import ApiService from '../services/ApiService';


export const getImages = () => (dispatch) =>
    new Promise((resolve, reject) => {
        dispatch({
            type: keys.GET_IMAGES_PENDING,
            payload: '',
        });
        ApiService.getImages()
            .then((response) => {
                dispatch({
                    type: keys.GET_IMAGES_FULFILLED,
                    payload: response.data,
                });
                resolve(response)
            })
            .catch((error) => {
                dispatch({
                    type: keys.GET_IMAGES_REJECTED,
                    payload: error.response.data,
                });
                reject(error);
            });
    });
