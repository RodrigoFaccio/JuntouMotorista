import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Dashboard/Home';
import Embark from '../screens/Control/Embark';
import Disembark from '../screens/Control/Debarkation';
import Finalization from '../screens/Control/Finalization';
import { color } from "../constants/colors";
import { View,Image } from 'react-native';





const App = createStackNavigator();
const LogoLeft = ()=>(
    <View>
        <Image style={{width:40,height:40, marginLeft:10}} source={require('../assets/perfil.png')} />
    </View>
);
const LogoRight = ()=>(
    <View>
        <Image style={{width:40,height:40,marginRight:10}} source={require('../assets/whats.png')} />
    </View>
);
const LogoLeftE = ()=>(
    <View>
        <Image style={{width:40,height:40, marginLeft:10}} source={require('../assets/cancel.png')} />
    </View>
);
const LogoRightE = ()=>(
    <View>
        <Image style={{width:40,height:40,marginRight:10}} source={require('../assets/whats.png')} />
    </View>
);

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
            headerLeft: () => (
              <LogoLeft  />
            ),
            headerRight: () => (
                <LogoRight  />
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
                headerLeft: () => (
                  <LogoLeftE  />
                ),
                headerRight: () => (
                    <LogoRightE  />
                  ),
              })}
            />
            <App.Screen name="Disembark" component={Disembark} options={{title:'Desembarque'}}/>
            <App.Screen name="Finalization" component={Finalization} options={{title:'Finalizar'}}/>
        </App.Navigator>



    
    );
}

export default AppRoutes;