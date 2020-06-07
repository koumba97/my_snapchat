import React, { Component } from 'react';
import{StyleSheet, View, Button, Image, Text, TextInput, Alert} from 'react-native';

let headerList = new Headers();
headerList.append("Content-Type", "application/json");


class FormRegister extends React.Component {
        
    state = {
        email:'',
        password:'',
    }

        
    handleChange = (e) => {

        updateFormData({
            ...formData,
            [e.target.name]: e.nativeEvent.text.trim()
        });
    };

    handleSubmit = (event) => {
        console.log(this.state);
        
        event.preventDefault();
        fetch("http://snapi.epitech.eu/inscription", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email:this.state.email,
            password:this.state.password,
        })
        
        
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        // Alert.alert(
        //     "Hello there",
        //     "Welcome to snapchat ! Please log in",
        //     [   
        //         {
        //         text: "Log in",
        //         onPress: () => this.props.navigation.navigate("Log in")
        //         }
        //     ]
        // )
    })
    .catch(Alert.alert('Un compte à lié à cette adresse email existe déjà'));
    };    
     
    render(){

        return(

            <View style={{backgroundColor:'white', paddingTop:30}}>
                <View style={styles.containerLogo}>
                    <Image style={styles.logo} source={require('../assets/icon.png')}/>
                </View>
                <Text style={styles.title}>Sign Up</Text>

                <View>

                    <TextInput 
                        style={styles.textInputs} 
                        placeholder='Email' 
                        defaultValue=''
                        name='email'

                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    
                    />

                    <TextInput 
                        style={styles.textInputs} 
                        placeholder='Password'
                        defaultValue='' 
                        name='password'
                        
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        
                    />

                    <Text style={styles.info}>
                        By tapping Sign Up & Accept, you acknowledge that you have 
                        read the Privacy Policy and agree to the Terms of Service. 
                        Snapchatters can always capture or save your messages, 
                        such as by taking a screenshot or using a camera. 
                        Be mindful of what you Snap!
                    </Text>
                    <Text  onPress={this.handleSubmit} style={styles.submitButton}>Sign up & Accept</Text>
                        
                </View>
            </View>
        )
    }


}


const styles = StyleSheet.create({
    logo: {
        width: 40,
        height: 40,
        marginTop:60
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        
        alignSelf:'stretch',
        marginBottom:30,
        color:'black',
        justifyContent: 'center',
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:5,
        fontSize:25,
        textAlignVertical: 'center',

    },

    formStyle:{
        display:'flex', 
        flexDirection:'column', 
        fontFamily:'Arial', 
        color:'grey', 
        fontSize:12, 
        fontWeight:'bold', 
        padding:10
    },

    nameInputs: {
        display:'flex', 
        flexDirection:'row',
        justifyContent:'space-between', 
        marginTop:20, 
        marginBottom:20,
        
        
    },
    labelInputs:{
        marginLeft:10
    },

    textInputs: {
        backgroundColor:'#EAEAEA', 
        height:40,
        borderRadius:5, 
        fontSize:20,
        width:250,
        marginBottom:30,
        alignSelf: 'center',
        paddingLeft:10
    },


    submitButton: {
        backgroundColor:'#EAEAEA', 
        height:40, 
        marginBottom:20,
        borderRadius:20, 
        paddingTop:5,
        backgroundColor:'yellow',
        fontSize:17,
        fontWeight:'bold',
        width:150,
        textAlign:'center',
        alignSelf: 'center',
    },

    info: {
        fontSize:12,
        textAlign:'center',
        marginBottom:20,
        color:'#B8B8B8',
        padding:20,
    }
 
});

export default FormRegister;