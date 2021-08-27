import React from 'react';
import { View,StyleSheet,StatusBar } from 'react-native';

import HorizontalList from '../commons/List/Horizontal/HorizontalList';

const TechNews = ({data})=>{
    return(
        <HorizontalList title="Tech News" data={data}/>
    )
}

const styles = StyleSheet.create({
    container:{
    
    }
})

export default TechNews;