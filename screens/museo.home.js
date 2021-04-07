import React, {useState} from 'react';
import {View, Button, TextInput, ScrollView, StyleSheet, Alert} from 'react-native';

const CreateMuseoHome = (props) => {
    
    const  [state, setState] = useState({
        mistake: ""
    })
    
    const handleChangeText = (mistake, value) => {
        setState({...state, [mistake]: value})
    }

    const goNextPage = () => {
        if (state.mistake === '') {
            alert("NO")
        } else {
            props.navigation.navigate("CreateMuseoMistake")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput 
                    placeholder="Mistake" 
                    onChangeText={(value) => handleChangeText("mistake", value)}/>
            </View>
            <View>
                <Button title="Resolve" onPress={() => goNextPage()}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },  
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateMuseoHome;