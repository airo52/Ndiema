import React from 'react';
import { View,StyleSheet,StatusBar } from 'react-native';
import VerticalList from '../commons/List/Vertical/verticalList';


const PoliticalNews = ({data})=>{
    return(
       <VerticalList title="Political News" data={data}/>
    )
}

const styles = StyleSheet.create({
    container:{
    
    }
})

export default PoliticalNews;