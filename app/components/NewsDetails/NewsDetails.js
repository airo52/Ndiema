import React,{useState,useEffect} from 'react';
import { View,ScrollView,Image,StyleSheet,Text,Dimensions} from 'react-native';
import WriterDetails from '../commons/card/writerCard';
import HorizontalList from '../commons/List/Horizontal/HorizontalList';
const {width,height} = Dimensions.get('window');
import fakeData from '../../../fakeData';
const newsDetails =({route})=>{

    const {id:postId,category:postCategory,thumbnail,date} = route.params.item;
    const Tech = fakeData.filter(item => item.category === "tech");
    //const Item = props.route.params.item;
    //sendPostRequest

    

    const [news,setNews] = useState({});


    const sendPost = async(id)=>{
      //await post
      //setNews
    }

    useEffect(()=>{
       sendPost(postId)
    },[]);

    return(
        <ScrollView style={styles.container}>
        
               <Image        
        source={{
          uri: thumbnail,
        }} style={styles.image}/>
            <View style={styles.contentContainer}>
                 <View style={styles.NewsInfo}>
                 
                  <WriterDetails views="10" image={`https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXJsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60`} Name={`AIRO`}/>
                 
                  </View>
                  <Text style={styles.title}>
                  <Text style={styles.date}> {date}</Text>{"\n"}
                  Fishermen freed at last
                     </Text>
                     
                  <Text style={styles.content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                  
                  </Text>
            </View>

            <View style={styles.relatedPost}>
              <HorizontalList title="Related Post" data={Tech}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop:2,
    

    },
    image:{
       width:width,
       height:height/3,
       padding:4
    },
    contentContainer:{
      padding:5
    },
    title:{
        fontFamily:'serif',
        fontSize:19,
        marginLeft:4,
        color:'#000',
        marginBottom:2,
        
        

    },
    content:{
        fontSize:16,
        fontFamily:'serif',
        color:'#0008'
    },
    relatedPost:{
      marginTop:10,
      marginLeft:6,
    },
    date:{
        fontSize:10,
        color:'#3388',
    },
   

})

export default newsDetails;