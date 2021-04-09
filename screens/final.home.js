import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CreateFinalHome = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.text}>FINAL!!!</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundColor: "#629052"
    },  
    centered: {
        alignItems: "center"
    },
    image: {
        margin: 50,
        width: 300,
        height: 300,
        borderRadius: 300/2,
    },
    text: {
        color: "#ffffff"
    }
})

export default CreateFinalHome;