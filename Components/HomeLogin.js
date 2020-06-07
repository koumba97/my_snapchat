import React, { Component } from 'react';
import{StyleSheet, View, Button, Image, Text, TextInput} from 'react-native';
//import * as SecureStore from "expo-secure-store";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGlobe, faUserCircle, faCamera } from '@fortawesome/free-solid-svg-icons';
import Contacts from './Contact/Contacts';
import CameraPage from './Camera/CameraPage';
import Explorer from './Explorer';


export default createBottomTabNavigator({
    
    Contacts: {
        screen: Contacts,
        navigationOptions: {
        tabBarLabel: 
        <View style={{ flexDirection: 'row', justifyContent:'space-evenly', marginBottom:10}}>
                <FontAwesomeIcon icon={faUserCircle} size={30} color={"white"} />
        </View>,
        },
    },

    CameraPage: {
        screen: CameraPage,
        navigationOptions: {
        tabBarLabel: 
        <View style={{ flexDirection: 'row', justifyContent:'space-evenly', marginBottom:10 }}> 
                <FontAwesomeIcon icon={faCamera} size={30} color={"white"} />
        </View>,
        },
    },
    Explorer: {
        screen: Explorer,
        navigationOptions: {
        tabBarLabel: 
        <View style={{ flexDirection: 'row', justifyContent:'space-evenly', marginBottom:10  }}>
            <FontAwesomeIcon icon={faGlobe} size={30} color={"white"} />
        </View>,
        },
        
    },
},
{
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'pink',
        showIcon: 'true', 
        labelStyle: {
            fontSize: 11,
        },
        style: {
            backgroundColor: 'rgb(15, 203, 255)',
        }
    },


});
