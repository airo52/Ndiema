import React from 'react';
import { View,Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { NavigationContainer } from 'react-navigation';


const draw = createDrawerNavigator();

const Drawer = ()=>{
    return(
       <View>
            <Text numberOfLines={numberOfLines} style={{fontSize:SIZE,fontWeight:"bold",color:color}}>{children}</Text>
           
       </View>
    )
}

export default Drawer;
