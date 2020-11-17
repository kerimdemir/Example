import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, FlatList, TouchableOpacity, View} from 'react-native';
import {connect} from "react-redux";
import {
    getImages,
    nextImage,
    prevImage
} from "../../store/actions/home.actions";
import styles from "./styles";
import ArrowRight from "../../components/ArrowRight";
import ArrowLeft from "../../components/ArrowLeft";
import {Colors} from "../../themes";

const Home = ({
                  navigation,
                  home: {images,image},
                  getImages,
                  nextImage,
                  prevImage
              }) => {

    useEffect(() => {
        getImages();
    }, []);




    return (
        <View style={styles.container}>
            {image &&
            <>
                <View style={styles.imageContainer}>

                    <Image source={{uri: image.imageURL}} style={styles.image}/>

                    <TouchableOpacity style={styles.arrowLight} onPress={() => nextImage(images,image.id)}>
                        <ArrowLeft/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.arrowRight} onPress={() => prevImage(images,image.id)}>
                        <ArrowRight/>
                    </TouchableOpacity>


                </View>
                <Text style={styles.text}>{image.user}</Text>

            </>
            }
        </View>
    )
};

const mapStateToProps = ({home}) => ({home});

export default connect(mapStateToProps, {
    getImages,
    nextImage,
    prevImage
})(Home);

