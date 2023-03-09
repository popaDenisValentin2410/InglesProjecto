import React from "react";
import { TouchableOpacity ,Text ,StyleSheet, Image, TextInput, View, } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';






export default function MancareRomania ()  {
    const {name= 'Sarmale',
     photo="https://www.hinglish.news/wp-content/uploads/2020/03/477268-1522991197-sarmale-a-la-chef-catalin-scarlatescu.jpg", 
     
     reteta= "orez carne oua"}=MancareRomania



   
    return (
        <View style={styles.screen}>
            
            <View style={styles.container}>
      <Card key={"21"}  style={styles.item} >
        <Card.Content>
        <Card.Cover style={{height:300}} source={{ uri: photo }} />
        <View style={{height:200,left:170, top:40}}>
          <Title style={{fontSize:30}}>Sarmale</Title>
          </View>
        </Card.Content>
      </Card>

      <Card key={"22"}  style={styles.item} >
        <Card.Content>
        <Card.Cover style={{height:300}} source={{ uri:"https://yve.ro/wp-content/uploads/2018/11/Cate-calorii-are-mamaliga.jpeg" }} />
        <View style={{height:200,left:170, top:40}}>
          <Title style={{fontSize:30}} >{"Mamaliga"}</Title>
          </View>
        </Card.Content>
      </Card>


      <Card key={"23"}  style={styles.item} >
        <Card.Content>
        <Card.Cover style={{height:300}} source={{ uri:"https://th.bing.com/th/id/R.5827ef36a3b42682ac19247f9b7646fc?rik=IVvClCnbBRs4xw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-rPE2MnbgVoY%2fVH8XEOHpVPI%2fAAAAAAAATog%2fIoyQQWHVmig%2fw1200-h630-p-k-no-nu%2fDSC_4243.JPGref.jpg&ehk=stb3W5IMvo8vYEqOFYMedAFqxJ6vuOZNOBqyISs967E%3d&risl=&pid=ImgRaw&r=0" }} />
        <View style={{height:200,left:170, top:40}}>
          <Title style={{fontSize:30}}>{"Tocanita"}</Title>
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