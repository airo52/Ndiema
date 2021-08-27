import React from 'react';
import { View,StyleSheet,Image,TouchableWithoutFeedback,Text} from 'react-native';

import Title from '../Title/Title';
import Subtitle from '../Title/Subtitle';
import WriterDetails from './writerCard';

const BlockCard = ({style,ImageStyle,item,onPress})=>{


 
    const {thumbnail,title,desc,writerImage,writerName,views,Likes,date} = item;
    return(
        <TouchableWithoutFeedback onPress={onPress}>

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
        height:320,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'#fff',
        marginTop:4
    },
    image:{
        width:'100%',
        height:200,
    
    },
    contentContainer:{
        padding:5
    },
    date:{
        fontSize:10,
        fontFamily:'serif',
        fontStyle:'italic',
    }

  

})

export default BlockCard;