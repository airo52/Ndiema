import React from 'react';
import { View,Text,StyleSheet,Image} from 'react-native';
//import LottieView from 'lottie-react-native';

const ActivityIndicator = ({visible})=>{
   if(!visible) return null;
    return(
     <View style={styles.container}>
         <Image style={styles.Image} source={require('../../../../assets/load.gif')}/>
     </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        justifyContent:"center",
        alignItems:"center",
        zIndex:1,
    },
    Image:{
        width:80,
        height:80,
        borderRadius:40,
    }
})
export default ActivityIndicator;