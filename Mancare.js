import React from "react";
import { TouchableOpacity ,Text ,StyleSheet, Image, TextInput, View, } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';






export default function Mancare ()  {
    const {name= 'Maceio',
     photo="https://croaziere.co/wp-content/uploads/2019/01/Cuscuz-Paulista-Traditional-Brazilian-Food.jpg", 
     
     reteta= "orez carne oua"}=Mancare



   
    return (
        <View style={styles.screen}>
            
            <View style={styles.container}>
      <Card key={"51"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri: photo }} />
          <Title >{name}</Title>
          <Paragraph>
            Reteta:{reteta}
          </Paragraph>
        </Card.Content>
      </Card>

      <Card key={"52"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://www.luckybelly.com/wp-content/uploads/2020/08/Moqueca.jpg" }} />
          <Title >{"Moqueca"}</Title>
          <Paragraph>
            Reteta:{reteta}
          </Paragraph>
        </Card.Content>
      </Card>


      <Card key={"53"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://www.luckybelly.com/wp-content/uploads/2020/08/Pao-de-queijo.jpg" }} />
          <Title >{"Pão De Queijo"}</Title>
          <Paragraph>
            Reteta:{reteta}
          </Paragraph>
        </Card.Content>
      </Card>

      <Card key={"54"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://www.luckybelly.com/wp-content/uploads/2020/08/Coxinha.jpg" }} />
          <Title >{"Coxinha"}</Title>
          <Paragraph>
            Reteta:{reteta}
          </Paragraph>
        </Card.Content>
      </Card>

      
      <Card key={"55"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://www.luckybelly.com/wp-content/uploads/2020/08/Acaraje.jpg" }} />
          <Title >{"Acarajé"}</Title>
          <Paragraph>
            Reteta:{reteta}
          </Paragraph>
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
   width: 320,
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