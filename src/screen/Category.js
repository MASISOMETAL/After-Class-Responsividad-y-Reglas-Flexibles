import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'

const Category = ({ categorySelected, setCategorySelected }) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <Text style={styles.nameText}>{categorySelected.name}</Text>
            </View>
            <View style={styles.imagenContainer}>
                <Image source={{ uri: categorySelected.imagen }} style={styles.image} />
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.boxDescription}>
                    <Text style={styles.descriptionText}>Marca:</Text>
                </View>
                <View style={styles.boxData}>
                    <Text style={styles.descriptionText}>{categorySelected.Marca}</Text>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.boxDescription}>
                    <Text style={styles.descriptionText}>Camara Frontal:</Text>
                </View>
                <View style={styles.boxData}>
                    <Text style={styles.descriptionText}>{categorySelected.CamaraFrente}</Text>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.boxDescription}>
                    <Text style={styles.descriptionText}>Camara Trasera:</Text>
                </View>
                <View style={styles.boxData}>
                    <Text style={styles.descriptionText}>{categorySelected.CamaraTrasera}</Text>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.boxDescription}>
                    <Text style={styles.descriptionText}>Memoria Ram:</Text>
                </View>
                <View style={styles.boxData}>
                    <Text style={styles.descriptionText}>{categorySelected.MemoriaRam}</Text>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <View style={styles.boxDescription}>
                    <Text style={styles.descriptionText}>Procesador:</Text>
                </View>
                <View style={styles.boxData}>
                    <Text style={styles.descriptionText}>{categorySelected.Procesador}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => setCategorySelected(null)}>
                <Text style={styles.textButton}>Volver</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    boxContainer: {
        borderWidth: 1,
        borderColor: COLORS.lightPrimary,
        padding: 10,
        width: "85%",
        alignItems: 'center',
        backgroundColor: COLORS.lightPrimary,
        marginTop: 20
    },
    rowContainer: {
        flexDirection: 'row',
        // borderWidth: 1,
        width: "85%",
        alignItems: 'center',
    },
    boxDescription:{
        borderWidth: 1,
        borderColor: COLORS.lightPrimary,
        flex: 1,
        alignItems: 'center',
    },
    boxData:{
        borderWidth: 1,
        borderColor: COLORS.lightPrimary,
        flex: 1,
        alignItems: 'center',
    },
    nameText: {
        fontSize: 24,
        fontFamily: "lato-Bold",
        color: "#fff",
    },
    imagenContainer: {
        width: "85%",
        borderWidth: 1,
        borderColor: COLORS.lightPrimary,
        alignItems: 'center',
        paddingVertical: 20,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#2196f3',
        padding: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    textButton: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    descriptionText: {
        fontSize: 16,
    },
})