import React from "react";
import { StyleSheet, Text ,StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading() {
return(
    <LinearGradient
       colors={['#146C94', '#19A7CE', '#AFD3E2']}
        style={styles.container}

      >
        <StatusBar barStyle='light-content'></StatusBar>
        <Text style={styles.text}>Loading your weather...</Text>
    </LinearGradient>
)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-end',
        paddingHorizontal:30,
        paddingVertical:100,
        backgroundColor:'#ACBCFF'
    },
    text: {
        color: "white",
        textAlign:'center',
        fontSize:30  

    }
})
