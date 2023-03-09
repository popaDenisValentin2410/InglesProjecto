import React from "react";
import { TouchableOpacity ,ScrollView,Text ,StyleSheet,FlatList, SafeAreaView,View } from 'react-native';

import MancarePeru from "./MancarePeru";



export function MancarePeruScreen  ()  {
    return (
        <SafeAreaView style={{left:30}}> 
        
             <FlatList 
 
             data={[{name:1}]}
             renderItem={() => <MancarePeru />}
             keyExtractor={(item) =>item.key}
             contentContainerStyle={{padding:20, marginTop:16}}
                
             />
        </SafeAreaView>
    )


}

const styles = StyleSheet.create({
    Text:{
        
        fontSize:20,
        top:200,
        left:50,
    },
    screen:{
        flex:1,
        height:'100%',

        
      },
})