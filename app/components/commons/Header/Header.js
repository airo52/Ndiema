import React from 'react';
import { View,TextInput,StyleSheet,
    Text,
    FlatList
} from 'react-native';

const Header = () =>{
    return(
      
       

        
        <View style={styles.container}>
      
            <View style={styles.Logo}><Text>Logo</Text></View>

         
        </View>
     
    )

}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        marginTop:6,
        
       
        height:60,
        
    backgroundColor:'#eee'
    },
    Logo:{
        backgroundColor:'black',
        width:50,
        height:50,
        marginLeft:10,
        marginTop:4,
        borderRadius:200,
    }
  
})

export default Header;