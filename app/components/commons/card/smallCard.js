import React from 'react';
import { View,StyleSheet,StatusBar,Dimensions } from 'react-native';
import BlockCard from './BlockCard';
import { useNavigation } from '@react-navigation/core';

const {width} = Dimensions.get('window');
const SmallCard = ({item})=>{
    const navigation = useNavigation();
    return(
        <BlockCard onPress={()=>navigation.navigate("newsDetails",{item})}  item={item} style={styles.container} ImageStyle={styles.image}/>
    )
}

const styles = StyleSheet.create({
    container:{
      width:width / 2,
      marginRight:4,
      height:210,

    },
    image:{
        height:100,
    }
})

export default SmallCard;