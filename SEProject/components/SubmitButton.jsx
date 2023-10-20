import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const SubmitButton = ({title, onPress, isValid}) => {
  return (
    <TouchableOpacity style={styles.btnStyle(isValid ? COLORS.primary : COLORS.gray)} onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    btnText:{
        fontFamily: "bold",
        color: COLORS.WHITE,
        fontSize: 18
    },
    btnStyle: (backgroundColor)=> ({
        height: 50,
        width: '100%',
        marginVertical: 20,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12
    })
})