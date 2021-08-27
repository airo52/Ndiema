import React ,{useState}from 'react';
import { Text, View,StyleSheet, ScrollView,Dimensions } from 'react-native';
import FlatCard from '../card/FlatCard';
import { useNavigation } from '@react-navigation/core';
import fakeData from '../../../../fakeData';
const {height} = Dimensions.get('window');
const SeachedModel = ({visible,data,noteFound})=>{
    const navigation = useNavigation();
    if(!visible) return null;

    if(visible && data.length === 0 && !noteFound) return null;

    if(noteFound) return <View style={styles.container}>
        <Text style={styles.Text}>
             {noteFound}
    </Text>
    </View>
  return(
      <View style={styles.container}>
            <ScrollView>
                {data.map((item)=><FlatCard item={item} key={item.id} onPress={navigation.navigate("newsDetails",{item})}/>)}
            </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
         container:{
              position:'absolute',
               top:50,
               backgroundColor:'#0fcc',
               width:'100%',
               maxHeight:height/2,
               zIndex:1,
               padding:10, 
            
               borderBottomLeftRadius:10,
               borderBottomRightRadius:10,
         },
         Text:{
             fontSize:18,
             fontFamily:'serif',
             fontWeight:'bold',
             alignContent:'center',
             alignSelf:'center',
             color:"#88ff",
         }
})

export default SeachedModel;