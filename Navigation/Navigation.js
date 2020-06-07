import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import{StyleSheet, View, Button, Image, Text} from 'react-native';
import Home from '../Components/Home';
import FormRegister from '../Components/FormRegister';
import FormLogin from '../Components/FormLogin';
import HomeLogin from '../Components/HomeLogin';


const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerShown: false
        }
    },

    FormRegister: {
        screen: FormRegister,
        navigationOptions: {
            title: 'Inscription',
            //headerShown: false
        }
    },

    FormLogin: {
        screen: FormLogin,
        navigationOptions: {
            title: 'Connexion',
            //headerShown: false
        }
    },

    HomeLogin: {
        screen: HomeLogin,
        navigationOptions: {
            title: 'Welcome !',
            //headerShown: false
        }
    },
})

export default createAppContainer(HomeNavigator)