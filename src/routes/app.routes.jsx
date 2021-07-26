import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Dashboard/Home';
import Profile from '../screens/Dashboard/Profile';

import Embark from '../screens/Control/Embark';
import Disembark from '../screens/Control/Debarkation';
import Finalization from '../screens/Control/Finalization';

import { color } from "../constants/colors";
import { View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';





const App = createStackNavigator();
const LogoLeft = ()=>{
	const navigation = useNavigation();

	return(
		<TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
			<Image style={{width:40,height:40, marginRight:10}} source={require('../assets/perfil.png')} />
		</TouchableOpacity>
	);
}


const AppRoutes = ()=>{


    return (
        <App.Navigator
        screenOptions={{
            title:'',
            headerStyle:{
                backgroundColor:color.button
            }
        }}
          >
            <App.Screen name="Home" component={Home} 
           options={({ navigation }) => ({
            title:'Home',
                headerTitleAlign:'center',
                headerTitleStyle:{
                    color:'white',
                    
                    
                },
            
            headerRight: () => (
                <LogoLeft  />
              ),
          })}
            />

<App.Screen name="Profile" component={Profile} 
           options={({ navigation }) => ({
            title:'Perfil',
                headerTitleAlign:'center',
                headerTitleStyle:{
                    color:'white',
                    
                    
                },
            
            headerRight: () => (
                <LogoLeft  />
              ),
          })}
            />
            <App.Screen name="Embark" component={Embark}options={{title:'Embarque'}}
            options={({ navigation }) => ({
                title:'Embarque',
                    headerTitleAlign:'center',
                    headerTitleStyle:{
                        color:'white',
                        
                        
                    },
               
                headerRight: () => (
                    <LogoLeft  />
                  ),
              })}
            />
            <App.Screen name="Disembark" component={Disembark} options={{title:'Desembarque'}}/>
            <App.Screen name="Finalization" component={Finalization} options={{title:'Finalizar'}}/>
        </App.Navigator>



    
    );
}

export default AppRoutes;
