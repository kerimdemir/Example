import * as React from "react"
import {
    StyleSheet,
    View
} from "react-native"
import Svg, {Path} from "react-native-svg"
import {Colors, Metrics} from "../themes";


function ArrowLeft() {
    return (
        <View>
            <Svg
                stroke="#1f5284"
                fill={Colors.ARROW}

                xmlns="http://www.w3.org/2000/svg"
                width={70}
                height={70}
                viewBox="0 0 37.6 62.6"
            >
                <Path
                    d="M3.5 2.1C13.3 12 23.1 20 32.8 29.9 23.1 39.9 13.3 48 3.5 58.1v-13c5.3-4.8 10.6-9.5 16.6-14.9-6-5.5-11.3-10.3-16.6-15.1v-13z"/>
            </Svg>
        </View>
    )
}

export default ArrowLeft
