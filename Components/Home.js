import React from 'react';
import{StyleSheet, View, Button, Image, Text} from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock,faGlobe, faUserCircle, faCamera, faAnchor } from '@fortawesome/free-solid-svg-icons';
import {faAdobe,faMicrosoft} from '@fortawesome/free-brands-svg-icons';

class Home extends React.Component {

    render(){

        return(

            <View style={styles.container} >
                <View style={styles.containerLogo}>
                    <Image style={styles.logo} source={require('../assets/icon.png')}/>
                </View>

              
                <Text onPress={() => this.props.navigation.navigate('HomeLogin')}></Text>
                <View style={styles.buttonsContainer} >
                    <Text style={styles.loginButton} onPress={() => this.props.navigation.navigate('FormLogin')} >Log in</Text>
                    <Text style={styles.signupButton} onPress={() => this.props.navigation.navigate('FormRegister')}>Sign up</Text>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({

    login: {
      borderRadius:0
    },

    loginButton: {
        backgroundColor:'white',
        //alignSelf:'stretch',
        height:50,
        width:120,
        borderRadius:50,
        color:'black',
        justifyContent: 'center',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        padding:10,
        justifyContent: 'center',
        textAlignVertical: 'center',

    },

    signupButton: {
        backgroundColor:'#00AFF0',
        //alignSelf:'stretch',
        height:50,
        color:'white',
        width:120,
        borderRadius:50,
        justifyContent: 'center',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:20,
        padding:10,
        justifyContent: 'center',
        textAlignVertical: 'center',

    },

    container:{
        alignSelf: 'stretch',
        flex: 1,
        justifyContent:'flex-end',
        backgroundColor: 'yellow'
    },

    logo: {
        width: 200,
        height: 200,
        marginTop:200,
        marginBottom:150
    },
    containerLogo: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonsContainer:{
        flex:1,
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:250,

    }
    
  
    
  });
export default Home;