import React, { Component } from 'react';
import{StyleSheet, View, Button, Image, Text, TextInput} from 'react-native';
import { Input } from 'react-native-elements';
//import { ImagePicker } from 'react-native-image-picker';
import { render } from 'react-dom';

export default class Snap extends React.Component{

    // state={
    //     photo:null,
    // };
    // handleChoosePhoto= ()=> {
    //     const options={
    //         noData:true
    //     };
    //     ImagePicker.launchImageLibrary(options, response =>{
    //         console.log('response', response);
    //         if (response.uri){
    //             this.setState({ photo: response})
    //         }
    //     })
        
    // };

    render(){

        //const { photo } = this.state;
        return(
            // <View>
            //     <Image
            //         source={{uri: photo.uri}}
            //         style={{width:300, height:300}}
            //     />
            //     <Text onPress={this.handleChoosePhoto}>
            //         Choose a picture
            //     </Text>
            // </View>
            <Text>Snap</Text>
        )
    }

}