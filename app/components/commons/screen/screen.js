import React from 'react';
import { View,StyleSheet,StatusBar ,ScrollView} from 'react-native';

const Screen = ({children,isSearchFocused})=>{
  
    return(
       <ScrollView scrollEnabled={!isSearchFocused} style={styles.container}>
           {children}
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop:StatusBar.currentHeight,
      paddingHorizontal:15,
      flex:1,
      backgroundColor:"#eee" 
    }
})

export default Screen;