import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../themes';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        flex: 1
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    image: {
        width: '100%',
        height: Metrics.HEIGHT * 0.5,

        resizeMode: 'cover'
    },
    text: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size.big,
        paddingVertical: Metrics.HEIGHT * 0.03,
        paddingLeft: Metrics.WIDTH * 0.05,
        color: Colors.TEXT
    },
    arrowRight: {
        position: 'absolute',
        borderRadius: 100,
        padding: 10,
        backgroundColor: Colors.ARROW_BACKGROUND,
        top: 175,
        left: -25
    },
    arrowLight: {
        position: 'absolute',
        borderRadius: 100,
        padding: 10,
        backgroundColor: Colors.ARROW_BACKGROUND,
        top: 175,
        right: -25
    }


});
export default styles;
