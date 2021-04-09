import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Pressable, Modal, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const CreateIglesiaHome = (props) => {

    const  [state, setState] = useState({mistake: ""})
    const [modalVisible, setModalVisible] = useState(false)
    
    const handleChangeText = (mistake, value) => {
        setState({...state, [mistake]: value})
    }

    const goNextPage = () => {
        if (state.mistake === 'IGLESIA') {
            props.navigation.navigate("CreateIglesiaMistake")
        } else {
            setModalVisible(true)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.text}>IGLESIA-HOME</Text>
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
            <Modal
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <FontAwesomeIcon 
                            style={styles.modalText}
                            icon={faExclamationTriangle} 
                            color="red" 
                            size={50}/> 
                        <Text style={styles.modalText}>Lo sentimos, vuelva a intentarlo</Text>
                        <Pressable
                            style={[styles.button, styles.modalButton]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.text}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(52, 52, 52, 0.7)"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 20
    },
    modalButton: {
        width: 100
    }
})

export default CreateIglesiaHome;