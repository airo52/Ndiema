import React from 'react';
import { View,StyleSheet,StatusBar } from 'react-native';
import HorizontalList from '../commons/List/Horizontal/HorizontalList';
//import HorizontalList from '../commons/List/Horizontal/HorizontalList';

const BreakingNews = ({data})=>{
    return(
       
        <HorizontalList  title="Breaking News" data={data}/>
    )
}

const styles = StyleSheet.create({
    container:{
    
    }
})

export default BreakingNews;