import React from 'react';
import  {View,StyleSheet,StatusBar,Text} from 'react-native';
import NewsListVerticalFlatCard from '../card/newListFlatCard';
import fakeData from '../../../../fakeData';
const NewsList = ({route})=>{

    const category = route.params.category;
  
    const Category = fakeData.filter(item => item.category === category);
     return(
        <View style={styles.headerContainer}>
            {Category.map(item => <NewsListVerticalFlatCard  item={item} key={item.id}/>)}
            
        </View>
     )
}

const styles = StyleSheet.create({
        headerContainer:{
            width:'100%',
            height:'100%',
            marginTop:StatusBar.currentHeight,
         
           
            backgroundColor:'#fffc'
        },
        categoryTitle:{
            fontSize:18,
            fontWeight:'bold',
            textTransform:'uppercase',
        }
})

export default NewsList;