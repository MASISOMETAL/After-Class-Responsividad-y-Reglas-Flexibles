import { StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Category, ChooiseCategory, Home } from './src/screen'
import { useFonts } from 'expo-font';

const App = () => {

    const [categorySelected, setCategorySelected] = useState(null)
    const [screenHome, setScreenHome] = useState(true)


    const [fontsLoaded] = useFonts({
        "lato-Reactegular" : require("./src/assets/fonts/Lato-Regular.ttf"),
        "lato-Bold" : require("./src/assets/fonts/Lato-Bold.ttf"),
        "lato-Italic" : require("./src/assets/fonts/Lato-Italic.ttf")
    });

    if (!fontsLoaded) {
        return null
    }



    return (
        <SafeAreaView style={styles.container}>
            {screenHome ?
                (
                    <Home setScreenHome={setScreenHome} />
                ) : (categorySelected ?
                    <Category categorySelected={categorySelected} setCategorySelected={setCategorySelected} />
                    :
                    <ChooiseCategory
                        setCategorySelected={setCategorySelected}
                        setScreenHome={setScreenHome}
                    />
                )}
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    }
})