import React from "react";
import {View, Text, Image, StyleSheet,} from "react-native";


const Projects = (props) => {
    return (
        <View>
            <Image source={props.first} style={styles.img} />
            <Image source={props.second} style={styles.img} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 10
    }
})
export default Project;