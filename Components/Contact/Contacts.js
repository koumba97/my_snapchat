
import React from "react";
import { StyleSheet, View, ActivityIndicator, FlatList, Text, TouchableOpacity, Item } from "react-native";
import ContactList from './ContactList';



var result=[];
export default class Source extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount(){
        fetch("http://snapi.epitech.eu/all", {
            method: 'GET',
            headers: {
                'token': 'oPoKp91E7sfkY5V55upcpLyE',
            }
        })
        .then(response => response.json())
        .then((responseJson)=> {
            
            
            for(let i=0; i<responseJson['data'].length; i++){
                result.push(responseJson['data'][i]);
            }
            
            this.setState({
                loading: false
                
            })
            
        })
        .catch(error=>console.log(error))
    }

    
    render(){
        
        if(this.state.loading){
        return( 
            <View style={styles.loader}> 
            <ActivityIndicator size="large" color="#0c9"/>
            </View>
        )}
        return(
        <View style={styles.container}>
            <View style={styles.container}>
                <ContactList data={result} />
            </View>
        </View>
        )}
    }

    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    loader:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list:{
        paddingVertical: 4,
        margin: 5,
        backgroundColor: "#fff"
    },
});