
import React from 'react';

import { Text , View} from 'react-native';

export default function Header(props){

return(

    <View style={{width: '90%',marginVertical: '5%', }}>
<Text style={{color:'#0B2F5D', fontWeight: 'bold', fontSize: 16 }}>
{props.title}   </Text>
</View>

 
)

}

