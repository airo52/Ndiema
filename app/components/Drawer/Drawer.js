import React,{ useState }  from 'react';
import { View,Text,Image, StyleSheet,Button,TouchableWithoutFeedback,Picker} from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//import Animated from 'react-native-reanimated';
//import { NavigationContainer } from 'react-navigation';

import Home from '../Home/Home';
import newsDetails from '../NewsDetails/NewsDetails';
import SearchedNews from '../commons/search/SearchedNews';
import NewsList from '../commons/newslist/newsList';
import { createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Stack = createStackNavigator();

class LogoTitle extends React.Component{
    
    render(){
        const Title = this.props.Title;
        return(
            <>
            <View style={styles.Logo}>
       
            <Image
              style={{ width: 50, height: 50,borderRadius:25 }}
              source={require("../../../Logo.png")}
            />
             <Text style={styles.LogoTitle}>{Title}</Text>
           
            </View> 
          
            </>
        )
    }
}

function Nav(category,navigation,route){
   
    navigation.navigate("NewsList",{category});

}


function HeaderButton({route,navigation}){
    return (
        <Picker
        selectedValue={"Home"}
        style={styles.pick}
       onValueChange={(itemValue, itemIndex) => Nav(itemValue,navigation,route)}
      >
        <Picker.Item label="CATEGORIES" value="0" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Technology" value="tech" />
      </Picker>   

       
)
   
}




const Draw =()=>{
    return(

        <Stack.Navigator>
            <Stack.Screen name="Home"
             options={({ navigation, route }) => ({
                headerTitle: props => <LogoTitle Title="All News" {...props} />,
                headerRight: () => (
                    <HeaderButton navigation={route,navigation}/>
                 ),
              })}
            
            
            component={Home}/>
            <Stack.Screen name="newsDetails" options={({ route }) => ({ title: route.params.item.title })} component={newsDetails}/>
            <Stack.Screen name="NewsList"  options={({ route }) => ({ title: route.params.category })} component={NewsList} />
            
        </Stack.Navigator>
        
    )
}
const styles = StyleSheet.create({
      TopView:{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center',
          padding:20,
      },
      Image:{
          width:60,
          height:60,
          borderRadius:30,
      },
      Logo:{
            display:'flex',
            flexDirection:'row',
      },
      LogoTitle:{
          marginLeft:6,
          marginTop:6,
          alignSelf:'center',
          alignItems:'center',
          fontSize:18,
          fontFamily:'serif'
      },
      LogoImage:{
          
      },
      headIcon:{
          fontSize:20,
      },
      headButton:{
          marginRight:5,
          fontSize:20,
      },
      pick:{
         width:150,
         marginLeft:30,
         alignItems:'center',
         alignSelf:'center',
      }

})

export default Draw;
