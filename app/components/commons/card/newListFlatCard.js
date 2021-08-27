import React from 'react';
import { View,StyleSheet,Image,TouchableWithoutFeedback,Text} from 'react-native';
import Title from '../Title/Title';
import Subtitle from '../Title/Subtitle';
import WriterDetails from './writerCard';
import { useNavigation } from '@react-navigation/core';

const NewsListVerticalFlatCard = ({style,ImageStyle,item})=>{
    const navigation = useNavigation();

 
    const {thumbnail,title,desc,writerImage,writerName,views,Likes,date} = item;
    return(
        <TouchableWithoutFeedback onPress={()=>navigation.navigate("newsDetails",{item})}>
       <View style={[styles.container,style]}>
            <Image
              
        source={{
          uri: thumbnail,
        }}

        style={[styles.image,ImageStyle]}
      />
          <View style={styles.contentContainer}>
              <Title>{title}</Title>
              <Text style={styles.date}>{date}</Text>
              <Subtitle>
                {desc}
              </Subtitle>
              <WriterDetails views={views} image={writerImage} Name={writerName}/>
          </View>
       </View>
       </TouchableWithoutFeedback>
    )
}



const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:100,
        borderRadius:2,
        overflow:'hidden',
        backgroundColor:'#fff',
        marginTop:2,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        marginLeft:2,
        marginRight:2,

    },
    image:{
       flex:0.35,
       height:"100%",
    
    },
    contentContainer:{
        flex:0.65,
        paddingHorizontal:5,
        marginTop:8
    },
    date:{
       fontFamily:'serif',
       fontStyle:'italic',
       fontSize:10,
    }

  

})

export default NewsListVerticalFlatCard;