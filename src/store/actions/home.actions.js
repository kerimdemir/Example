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

                let filteredData = [];

                response.data.hits.map((item) => {
                    let obj = {
                        imageURL: item.userImageURL,
                        user: item.user,
                        likes: item.likes
                    }
                    filteredData.push(obj)
                })
                dispatch({
                    type: keys.GET_IMAGES_FULFILLED,
                    payload: filteredData,
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
