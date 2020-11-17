import * as keys from '../keys/home.keys';

const initialState = {};
export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {

        case keys.GET_IMAGES_PENDING:
            return {
                ...state,
                error: false,
                success: true,
                isLoading: true,
            };
        case keys.GET_IMAGES_FULFILLED:
            return {
                ...state,
                error: false,
                images: payload,
                isLoading: false,
            };
        case keys.GET_IMAGES_REJECTED:
            return {
                ...state,
                error: payload,
                isLoading: false,
            };

        default:
            return state;
    }
};
