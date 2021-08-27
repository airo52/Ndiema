import React ,{useState} from 'react';
import SeachedModel from './SearchedModel';
import fakeData from '../../../../fakeData';
import FlatCard from '../card/FlatCard';

import { useNavigation } from '@react-navigation/core';


import { View,TextInput,StyleSheet,
    ScrollView,Text,Dimensions, TouchableWithoutFeedback
} from 'react-native';
const {height} = Dimensions.get('window');
let timeoutId;
const debounce = (func,delay)=>{
   
      return (...args)=>{
        if(timeoutId) clearTimeout(timeoutId);
          timeoutId= setTimeout(() => {
             func.apply(null,args);
      }, delay);
    }
}
//onPress={navigation.navigate("newsDetails",{item})}

const SearchDisplay = ({visible,data,noteFound})=>{
    const navigation = useNavigation();
    if(!visible) return null;

    if(visible && data.length === 0 && !noteFound) return null;

    if(noteFound) return <View style={styles.containerr}>
        <Text style={styles.Text}>
             {noteFound}
    </Text>
    </View>
  return(
      <View style={styles.containerr}>
            <ScrollView>
                {data.map((item)=><FlatCard onPress={()=>alert('ok')} item={item} key={item.id} />)}
            </ScrollView>
      </View>
  )
}

const SearchBa = ({setSearchFocused}) =>{
    const [query,setQuery] = useState('');
    const [visible,setVisible] = useState(false);
    const [data,setData] = useState([]);
    const [notFound,setNotFound] = useState('');
    const handleChange =({nativeEvent})=>{
       const {text} = nativeEvent;
       if(text == ""){
        setQuery("");
        setVisible(false);
       }else{
       setQuery(text);
       setVisible(true);
       debounceSearch(query);
       }
    }

    const handleSearch = async (value)=>{
        const res = fakeData.filter(item => item.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
        var control =res.length !==0;

        if(control){
            setNotFound("");
           setData(res);

        }
       else if(!control){
            setNotFound("Search Not Found");
        }
    }

    const debounceSearch  = debounce(handleSearch,500);
    return(
        <>
        <View style={styles.container}>
           <TextInput value={query} 
           onChange={handleChange} style={styles.searchInput} placeholder="Search for news"
            onBlur={()=>{
                setSearchFocused(false);
            }}
            onFocus={()=>{
                setSearchFocused(true);
            }}
           />
           
        </View>
        <SearchDisplay visible={visible} data={data} noteFound={notFound}/>
       
     </>
    )

}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        marginTop:0,
        marginLeft:2,
        marginRight:2,
        display:"flex",
        alignItems:'center',
        alignSelf:'center',
        height:50,
        borderRadius:9,
        backgroundColor:'white',
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: '#0000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 1,
    },
  
    searchInput:{
      width:"80%",
      borderRadius:4,
      height:'100%',
      paddingLeft:8,
      fontSize:18,
     
    },
    containerr:{
        position:'absolute',
         top:50,
         backgroundColor:'#ffee',
         width:'100%',
         maxHeight:height/2,
         zIndex:1,
         padding:10, 
      
         borderBottomLeftRadius:10,
         borderBottomRightRadius:10,
   },
   Text:{
       fontSize:18,
       fontFamily:'serif',
       fontWeight:'bold',
       alignContent:'center',
       alignSelf:'center',
       color:"#88ff",
   }
})

export default SearchBa;