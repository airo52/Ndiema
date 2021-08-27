import React from 'react';
import { View,Text} from 'react-native';



const Subtitle = ({children,numberOfLines=2,SIZE=12,color="#88ee"})=>{
    return(
       <View>
            <Text numberOfLines={numberOfLines} style={{fontSize:SIZE,fontWeight:"bold",color:color}}>{children}</Text>
           
       </View>
    )
}

export default Subtitle;