import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";



const StudentInfo = (props) => {
    return (
        <View>
            <Image source={props.image}/>
            <View style={styles.infoWrapper}>
                <Text style={styles.fullname}>{props.fullname}</Text>
                <Text>{props.jobPosition}</Text>
                <Text style={styles.desc}>{props.desc}</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>
                        Hire Him
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img:{
        width: "100%",
        height: 280,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

    },
    infoWrapper:{
        backgroundColor: "#fff",
        width: "80%",
        alignItems: "center",
        marginLeft: 40,
        marginTop: -30,
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: "#ddd",
        birderbottomwidth: 0,
        shadowColor: "#000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    fullname:{
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    desc:{
        textAlign: "center",
    },
    btn:{
        backgroundColor: '#ffd700',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
    },
    btnText:{
        fontWeight: "bold",
        color: "#fff",
        textTransform: "uppercase",
    }
});


export default StudentInfo;