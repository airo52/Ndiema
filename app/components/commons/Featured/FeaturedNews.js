import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import BlockCard from '../card/BlockCard';
import { useNavigation } from '@react-navigation/core';

const FeaturedNews = ({children,numberOfLines=2,SIZE=12,color="#800080",item})=>{
    const navigation = useNavigation();
    return(
     <BlockCard onPress={()=>navigation.navigate("newsDetails",{item})} item={item} style={{marginVertical:15}}/>
    )
}

export default FeaturedNews;