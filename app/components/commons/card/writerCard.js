import React from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';



const WriterDetails = ({image,likes,views,Name,numberOfLines=2,SIZE=12,color="#88ee"})=>{
    return(
      <>
       <View style={styles.container}>
              <Image style={styles.image} source={{uri:image}}/>
            <Text style={styles.names}>{Name}</Text>
            <Text style={styles.icon}>
            <Icon 
             style={{marginRight:10,color:'#000'}}
             name={'eye'} >{
                count(views)['l']
             }</Icon>


             
             
</Text>

       </View>
       
     
       </>
    )
}
const style={
    style1: {
        fontWeight: '700',
        size:5
      },
      style2: {
        fontWeight: '100'
      }
}

function count(str) {
    var countForZero = 0;
    var countForOne = 0;
      
    for (var i = 0, length = str.length; i < length; i++) {
      if (str[i] === '0') {
        countForZero++;
      }
      else {
        countForOne++;
      }
    }
    const leter = countForZero <=2 ?str:countForZero >=2 && countForZero <=5 ?'k':'M';

  var newString = countForZero <=2?leter:countForZero >=5? str.substring(0, str.length - 6) +leter:str.substring(0, str.length - 3) +leter;
      
  return {
      'count':countForZero,
      'l':newString
       
  };
  }

const styles=StyleSheet.create({
    container:{
         height:40,
         marginLeft:4,
         marginTop:2,
         display:'flex',
         flexDirection:'row',
         width:'100%',

    },
    names:{
      fontSize:15,
      marginLeft:2,
      marginTop:6
    },
    image:{
        width:25,
        height:25,
        borderRadius:400,
        marginTop:4
    
    },
    icon:{
       position:'relative',
       marginTop:10,
       marginLeft:15,
       justifyContent:'space-around',
       display:'flex'
   
        
      
       
    },
    date:{
         marginTop:6,
         height:20,
    },
    btn:{
        color:'black',
        alignItems:'center'
    }
})


export default WriterDetails;