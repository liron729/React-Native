import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const StudentDetails = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View>
          <Image source={props.image} style={styles.img}/>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.name}>{props.name}</Text>
          <Text>{props.description}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  cardWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  img:{
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  infoWrapper:{
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  name:{
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});

export default StudentDetails;
