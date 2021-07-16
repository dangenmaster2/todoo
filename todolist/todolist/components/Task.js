import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) =>{
    return(
        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circular}></View>

        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemText: {
        maxWidth: '80%'
        
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'dodgerblue',
        opacity: 0.4,
        margin: 10,
        borderRadius: 5,
        marginRight: 15,
    },
    circular: {
        width: 12,
        height: 12,
        borderRadius: 5,
        borderColor: 'red',
        borderWidth: 2,

    },    
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },


})

export default Task;