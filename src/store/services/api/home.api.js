import ajax from '../AxiosService';
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '9656065-a4094594c34f9ac14c7fc4c39';

export const getImages = () => {
    //   `https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo`
    return ajax.get(API_URL + "?key=" + API_KEY + '&q=beautiful+landscape&image_type=photo`');
}
