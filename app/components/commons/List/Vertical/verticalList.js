import React from 'react';
import { View,StyleSheet,StatusBar,FlatList } from 'react-native';
import FlatCard from '../../card/FlatCard';
//import SmallCard from './BreakingNews/smallCard';
import Title from '../../Title/Title';
const VerticalList = ({title,data})=>{
    return(
        <View >
           <Title>{title}</Title>

           <View style={styles.container}>
           {data.map(item => <FlatCard item={item} key={item.id}/>)}
           </View>
          
         </View>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop:StatusBar.currentHeight,
       marginVertical:15,
      flex:1,
      backgroundColor:"#eee" 
    },
   
})

export default VerticalList;