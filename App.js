import * as React from "react";
import { AsyncStorage, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Actions from "./actions";
import Navigation from './Navigation/Navigation';
import ContactList from './Components/Contact/ContactList';
import HomeLogin from "./Components/HomeLogin";

let headerList = new Headers();
headerList.append("Content-Type", "application/json");

const AuthContext = React.createContext();


console.disableYellowBox = true;
const Stack = createStackNavigator();

export default function App() {

  
    return (
        <NavigationContainer>
            <Navigation/>
            {/* <HomeLogin/> */}
        </NavigationContainer>
    );
}
