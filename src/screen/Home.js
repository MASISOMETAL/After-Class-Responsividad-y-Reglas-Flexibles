import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import COLORS from '../constants/colors';

const Home = ({ setScreenHome }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Elije la categoria</Text>
            <TouchableOpacity style={styles.button} onPress={()=> setScreenHome(false)}>
                <Text style={styles.textButton}>Ir a categorias</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 30,
        fontFamily: "lato-Bold",
        backgroundColor: COLORS.primary,
        width: "100%",
        textAlign: 'center',
        paddingVertical: 20,
        color: "#fff"
    },
    button: {
        backgroundColor: '#2196f3',
        padding: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    textButton: {
        color: "white",
        fontSize: 20,
        fontFamily: "lato-Reactegular",
        textAlign: 'center'
    }
})