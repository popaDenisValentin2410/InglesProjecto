import React from "react";
import { TouchableOpacity ,ScrollView,Text ,StyleSheet,FlatList, SafeAreaView,View } from 'react-native';
import MancareSpania from "./MancareSpania";


export function MancareSpaniaScreen  ()  {
    return (
        <SafeAreaView style={{left:30}}> 
        
             <FlatList 
 
             data={[{name:1}]}
             renderItem={() => <MancareSpania />}
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