import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CreateErrotatxoHome = (props) => {
    const  [state, setState] = useState({
        mistake: ""
    })
    
    const handleChangeText = (mistake, value) => {
        setState({...state, [mistake]: value})
    }

    const goNextPage = () => {
        if (state.mistake === 'ERROTATXO') {
            props.navigation.navigate("CreateErrotatxoMistake")
        } else {
            alert("Lo sentimos, vuelva a intentarlo")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.centered}>
                <Image 
                    style={styles.image}
                    source={require('../assets/errotatxo.png')}
                />
            </View>
            <View>
                <TextInput 
                    style={styles.input}
                    onChangeText={(value) => handleChangeText("mistake", value)}
                    placeholder="Escribe un texto..." 
                    autoCapitalize="characters"
                />
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => goNextPage()}>
                    <Text 
                        style={styles.text}>
                        ENVIAR
                    </Text>
                </TouchableOpacity>
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
    input: {
        marginBottom: 15,
        padding: 10,
        height: 40,
        backgroundColor: "#ffffff"
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10
    },
    text: {
        color: "#ffffff"
    }
})

export default CreateErrotatxoHome;