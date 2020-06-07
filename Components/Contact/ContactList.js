import React from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import ContactStyle from './ContactStyle';

const _renderItem = ({ item }) => 
<ContactStyle
    email={item.email}

/>

let ContactList;
export default (ContactList = props => (
    <FlatList 
        data={props.data}
        renderItem={_renderItem}
        keyExtractor={item => item.email}
    />
))


