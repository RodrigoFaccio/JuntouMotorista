import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Dashboard/Home';
import Embark from '../screens/Control/Embark';
import Disembark from '../screens/Control/Debarkation';
import Finalization from '../screens/Control/Finalization';




const App = createStackNavigator();

const AppRoutes = ()=>{
    return (
        <App.Navigator>
        <App.Screen name="Home" component={Home}/>
        <App.Screen name="Embark" component={Embark}/>
        <App.Screen name="Disembark" component={Disembark}/>
        <App.Screen name="Finalization" component={Finalization}/>



    </App.Navigator>
    );
}

export default AppRoutes;