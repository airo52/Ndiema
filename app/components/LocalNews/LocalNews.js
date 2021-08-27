import React from 'react';
import { View,StyleSheet,StatusBar } from 'react-native';
import HorizontalList from '../commons/List/Horizontal/HorizontalList';

const LocalNews = ({data})=>{
    return(
        <HorizontalList title="Local News" data={data}/>
    )
}

const styles = StyleSheet.create({
    container:{
    
    }
})

export default LocalNews;