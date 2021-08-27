import React from 'react';
import { View,StyleSheet,StatusBar,FlatList } from 'react-native';
import SmallCard from '../../card/smallCard';
import Title from '../../Title/Title';
const HorizontalList = ({title,data})=>{
    return(
        <>
         <Title size={20}>{title}</Title>
         
         <View style={styles.listStyle}>
         <FlatList data={data} keyExtractor={item => item.id} 
         horizontal showsHorizontalScrollIndicator={false}  
         renderItem={({item})=><SmallCard item={item}/>}></FlatList>
         </View>
         </>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop:StatusBar.currentHeight,
      paddingHorizontal:15,
      flex:1,
      backgroundColor:"#eee" 
    },
    listStyle:{
        marginVertical:15
    }
})

export default HorizontalList;