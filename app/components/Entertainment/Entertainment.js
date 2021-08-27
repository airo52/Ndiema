import React from 'react';
import { View,StyleSheet,StatusBar } from 'react-native';
import VerticalList from '../commons/List/Vertical/verticalList';


const EnterTainMentNews = ({data})=>{
    return(
       <VerticalList title="EnterTainMent News" data={data}/>
    )
}

const styles = StyleSheet.create({
    container:{
    
    }
})

export default EnterTainMentNews;