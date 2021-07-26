import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { color } from "../constants/colors";


import Login from '../screens/Login';
import Register from '../screens/Register';


const Auth = createStackNavigator();

const AuthRoutes = ()=>{
    return(
        <Auth.Navigator 
        barStyle={{
            backgroundColor: color.button,
          }}>
            <Auth.Screen name="Login" component={Login}/>
            <Auth.Screen name="Register" component={Register}/>

        </Auth.Navigator>
    );
}

export default AuthRoutes;