import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";


const students = [
    {name: 'Dion' , surname: 'Konjuhi', age: '32'},
    {name: 'Liron' , surname: 'Aliu', age: '32'},
    {name: 'Reina' , surname: 'Beadini', age: '32'},


]

const ListScreen = (props) => {
    
    return (
        <View>
            <Text style={styles.text}>List of Students</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={student => student.name}    
            data={students}
            renderItem={({item}) => {
                return <Text style={styles.item}>{item.name} {item.surname} - {item.age}</Text>
            }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    item: {
        marginHorizontal: 10,
        padding: 8,
        backgroundColor: '#f2f2f2',
        borderRadius: 6,
    }
});


export default ListScreen;
