import React from "react";
import { TouchableOpacity ,Text ,StyleSheet, Image, TextInput, View, } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';






export default function MancareSpania ()  {
    const {name= 'Churros',
     photo="https://ericaobrien.com/wp-content/uploads/2021/06/churros-scaled.jpg", 
     
     reteta= "orez carne oua"}=MancareSpania



   
    return (
        <View style={styles.screen}>
            
            <View style={styles.container}>
      <Card key={"41"}  style={styles.item} >
        <Card.Content>
        <Card.Cover style={{height:300}} source={{ uri: photo }} />
        <View style={{height:200,left:180, top:40}}>
          <Title style={{fontSize:30}}>{"Churros"}</Title>
       </View>
        </Card.Content>
      </Card>

      <Card key={"42"}  style={styles.item} >
        <Card.Content>
        <Card.Cover style={{height:300}} source={{ uri:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tortilla-6ff8c86.jpg?quality=90&resize=620%2C310" }} />
        <View style={{height:200,left:180, top:40}}>
          <Title style={{fontSize:30}}>{"Tortilla"}</Title>
          </View>
        </Card.Content>
      </Card>


      <Card key={"43"}  style={styles.item} >
        <Card.Content>
        <Card.Cover style={{height:300}} source={{ uri:"https://th.bing.com/th/id/R.5c69e05d285ee95f29bf814b288997dc?rik=BxwiIHBaiCyZrw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-jOrYkSnaYK8%2fUXGCxi6FohI%2fAAAAAAAACUo%2fDu-ApZ1IbK0%2fs1600%2fReal_Paella.jpg&ehk=e69Erg%2fv49L3zE%2fMKC%2f0dGsOIX%2bSY%2fqKsTsVTnWV4hQ%3d&risl=&pid=ImgRaw&r=0" }} />
        <View style={{height:200,left:180, top:40}}>
          <Title style={{fontSize:30}}>{"Paella"}</Title>
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