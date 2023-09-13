import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Celulares from "../data/CelularesMock"
import COLORS from '../constants/colors'

const RenderItem = ({ item, setCategorySelected }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => setCategorySelected(item)}>
            <Text style={styles.textButton}>{item.name}</Text>
        </TouchableOpacity>
    )
}

const ChooiseCategory = ({ setCategorySelected, setScreenHome }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.textTitle}>Elije la categoria</Text>
            </View>
            <FlatList
                data={Celulares}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <RenderItem
                        item={item}
                        setCategorySelected={setCategorySelected}
                    />}
            />
            <TouchableOpacity style={styles.button} onPress={() => setScreenHome(true)}>
                <Text style={styles.textButton}>Volver a Home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChooiseCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    titleContainer:{
        backgroundColor: COLORS.primary,
        width: "100%",
        paddingVertical: 20,
    },
    textTitle: {
        fontSize: 30,
        fontFamily: "lato-Bold",
        color: "#fff",
        textAlign: 'center',
    },
    button: {
        backgroundColor: COLORS.lightPrimary,
        padding: 20,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 20,
    },
    textButton: {
        color: "#fff",
        fontSize: 20,
        fontFamily: "lato-Italic",
        textAlign: 'center',
    },
})