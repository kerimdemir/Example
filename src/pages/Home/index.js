import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {
    getImages,
} from "../../store/actions/home.actions";
import styles from "./styles";


const Home = ({
                  navigation,
                  home: {images},
                  getImages
              }) => {
    useEffect(() => {
        getImages();
    }, []);


    return (
        <View style={styles.container}>
            {images &&
            <Text>{images.length}42 </Text>
            }
        </View>
    )
};

const mapStateToProps = ({home}) => ({home});

export default connect(mapStateToProps, {
    getImages
})(Home);

