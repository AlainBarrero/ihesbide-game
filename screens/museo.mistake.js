import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CreateMuseoMistake = (props) => {
    
    const  [state, setState] = useState({
        mistake: ""
    })
    
    const handleChangeText = (mistake, value) => {
        setState({...state, [mistake]: value})
    }

    const goNextPage = () => {
        if (state.mistake === '1889') {
            props.navigation.navigate("CreateErrotatxoHome")
        } else {
            alert("Lo sentimos, vuelva a intentarlo")
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.mistake}>
                <Text style={[styles.text, {fontSize: 16, textAlign: "justify"}]}>
                    Este recorrido está m<Text style={styles.specialWord}>u</Text>y vinculado a la figura de Jose Miguel Bara<Text style={styles.specialWord}>n</Text>diaran. 
                    Su casa natal de n<Text style={styles.specialWord}>o</Text>mbre Peruenezar, Sara-Etxea d<Text style={styles.specialWord}>o</Text>nde residió durante largo 
                    tiempo hasta su muerte y el molino Larruntza re<Text style={styles.specialWord}>c</Text>ientemente inaugurado como el museo Barandiaran, se reúnen en este 
                    recorrido donde él mismo solía pasear <Text style={styles.specialWord}>h</Text>ace añ<Text style={styles.specialWord}>o</Text>s. Todos los días subía al 
                    dep<Text style={styles.specialWord}>ó</Text>sito de Gaztiñerre, que es el punto mas elevado de este <Text style={styles.specialWord}>c</Text>amino, 
                    a<Text style={styles.specialWord}>h</Text>ora cubiert<Text style={styles.specialWord}>o</Text> por los árboles del cami<Text style={styles.specialWord}>n</Text>o. 
                    Caminos vecinales de antaño, caseríos, bosq<Text style={styles.specialWord}>ue</Text>s y prados, orillas de ríos, San Martín, etc. son algunos de los recursos que 
                    se pueden disfrutar en este fácil, tranquilo y mara<Text style={styles.specialWord}>v</Text>illoso s<Text style={styles.specialWord}>e</Text>ndero.
                </Text>
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
    },
    mistake: {
        marginTop: 50,
        marginBottom: 50
    },
    specialWord : {
        fontWeight: "bold",
        fontSize: 17
    }
})

export default CreateMuseoMistake;