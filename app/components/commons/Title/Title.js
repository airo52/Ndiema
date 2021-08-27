import React from 'react';
import { View,Text} from 'react-native';



const Title = ({children,numberOfLines=1,SIZE=18})=>{
    return(
       <View>
            <Text numberOfLines={numberOfLines} style={{fontWeight:"bold",color:"indigo",fontSize:SIZE}}>{children}</Text>
            
       </View>
    )
}


export default Title;