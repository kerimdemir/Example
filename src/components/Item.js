import {Image, Text, View, StyleSheet} from "react-native";
import React from "react";
import {Metrics} from "../themes";
import Icons from "../themes/icons";

const Item = ({item}) => {
    return (
        <View>
            <Image source={item.imageURL} style={styles.image}/>
            <Image source={Icons.arrow} style={styles.image}/>
            <Text>{item.user}</Text>
        </View>
    )
}

export default Item
const styles = StyleSheet.create({
    image: {
        width: '%100',
        height: Metrics.HEIGHT * 0.1,
        resizeMode: 'contain'
    }

})
