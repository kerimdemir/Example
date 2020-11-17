import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const screenGuidelineBaseWidth = 350;
const screenGuidelineBaseHeight = 680;
const scale = (size) => (screenWidth / screenGuidelineBaseWidth) * size;
const verticalScale = (size) =>
    (screenHeight / screenGuidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

const type = {
    italic: 'RopaSans-Italic',
    regular: 'RopaSans-Regular',
};
const size = {
    big: 17,
    medium: 14,
    small: 11,
    tiny: 9,
};
export default {
    type,
    size,
    props,
    scale,
    verticalScale,
    moderateScale,
};
