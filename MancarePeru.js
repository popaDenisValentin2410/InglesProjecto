import React from "react";
import { TouchableOpacity ,Text ,StyleSheet, Image, TextInput, View, } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';






export default function MancarePeru ()  {
    const {name= 'Ceviche',
     photo="https://bing.com/th?id=OSK.e412ad20a4a2a44d2c84878324ddd9e4", 
     
     reteta= "orez carne oua"}=MancarePeru



   
    return (
        <View style={styles.screen}>
            
            <View style={styles.container}>
      <Card key={"31"}  style={styles.item} >
        <Card.Content>
        <Card.Cover style={{height:300}} source={{ uri: photo }} />
        
          <Title style={{fontSize:30,left:170, top:40}}>Ceviche</Title>
         
        </Card.Content>
      </Card>

      <Card key={"32"}  style={styles.item} >
        <Card.Content>
        <Card.Cover style={{height:300}} source={{ uri:"https://bing.com/th?id=OSK.0b736b1edebba90dc3c99e7d763d2497" }} />
        <View style={{height:200,left:50, top:40}}>
          <Title style={{fontSize:30}}>{"Carapulcra con sopa seca"}</Title>
         </View>
        </Card.Content>
      </Card>


      <Card key={"33"}  style={styles.item} >
        <Card.Content>
        <Card.Cover style={{height:300}} source={{ uri:"https://bing.com/th?id=OSK.7432531e25d521eb1a476912fd6c03bb" }} />
        <View style={{height:200,left:150, top:40}}>
          <Title style={{fontSize:30}}>{"Lomo Saltado"}</Title>
          </View>
        </Card.Content>
      </Card>

      
    
    </View>

            
            </View>
    )
}



const styles = StyleSheet.create({
    item:{
        marginTop:16,
    padding: 10,
   width: 520,
   height:450,
  alignitems: "center",
  shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4
    }
    }
})