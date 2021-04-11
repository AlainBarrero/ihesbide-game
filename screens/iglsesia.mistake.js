import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Pressable, Modal} from 'react-native';
import { Table, Rows} from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const CreateIglesiaMistake = (props) => {

    const  [state, setState] = useState({mistake: ""})
    const [modalVisible, setModalVisible] = useState(false)

    const data = [
        ['5','7','6','0','7','8','9','5','6','9','0','5','6','9'],
        ['2','2','2','5','7','1','8','4','4','4','9','3','3','3'],
        ['2','6','2','8','1','1','7','4','9','4','6','5','0','3'],
        ['0','5','2','8','9','1','5','4','6','4','7','3','3','3'],
        ['9','9','2','0','8','1','6','4','8','4','9','5','6','3'],
        ['7','8','2','9','6','1','7','4','4','4','0','3','3','3'],
        ['5','7','6','0','7','8','9','5','6','9','0','5','6','9']
    ]
    
    const handleChangeText = (mistake, value) => {
        setState({...state, [mistake]: value})
    }

    const goNextPage = () => {
        if (state.mistake === '1730') {
            props.navigation.navigate("CreateFuenteHome")
        } else {
            setModalVisible(true)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.mistake}>
                <Table style={styles.table}>
                    <Rows data={data} textStyle={styles.row}/>
                </Table>
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
    mistake: {
        marginTop: 50,
        marginBottom: 50
    },
    table: {
        borderWidth: 0
    },
    row: {
        color: "#ffffff",
        fontSize: 20
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

export default CreateIglesiaMistake;