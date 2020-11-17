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

                response.data.hits.map((item, index) => {
                    let obj = {
                        id: index,
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
                dispatch({
                    type: keys.NEXT_IMAGE,
                    payload: filteredData[0]
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

export const nextImage = (images, id) => (dispatch) =>
    images.map((item) => {
        if (item.id == id) {
            dispatch({
                type: keys.NEXT_IMAGE,
                payload: images[id + 1]
            });
        }
    });


export const prevImage = (images, id) => (dispatch) =>
    images.map((item) => {
        if (item.id == id && id != 0) {
            dispatch({
                type: keys.PREV_IMAGE,
                payload: images[id - 1]
            });
        }
    });
