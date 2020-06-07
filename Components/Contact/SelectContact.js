import React from 'react'
import { FlatList, Text, View, StyleSheet, Alert } from 'react-native'
import SelectContactStyle from './SelectContactStyle';

const _renderItem = ({ item }) => 
<SelectContactStyle
    email={item.email}
  />

let SelectContact;
export default (SelectContact = props => (
    <FlatList 
        data={props.data} 
        renderItem={_renderItem}
        keyExtractor={item => item.email}
    />
))


