import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

let ContactStyle
export default (ContactStyle = props => (
  
  <TouchableOpacity style={styles.row}>
    <Image style={styles.picture} source={require('../../assets/icon.png')} />
    <View>
        <Text style={styles.primaryText}>
            {props.email}
            {props.token}
        </Text>
    </View>
  </TouchableOpacity>
))

const styles = StyleSheet.create({
    row: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 12 
    },
    picture: { 
        width: 50, 
        height: 50, 
        borderRadius: 25, 
        marginRight: 18 
    },
    primaryText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        marginBottom: 4,
    },
  secondaryText: { color: 'grey' },
})