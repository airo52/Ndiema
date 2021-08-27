import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/components/Home/Home';
import { NavigationContainer} from '@react-navigation/native';
import Draw from './app/components/Drawer/Drawer';



export default function App() {
 
  return (
    
      <NavigationContainer>
         <Draw/>
      </NavigationContainer>
  );
  
}


