import * as React from 'react';
import { View, StyleSheet,TouchableOpacity,Text, Button, ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Card, Title, Paragraph } from 'react-native-paper';

export function DancePeru() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <ScrollView>

      <Card key={"58"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://i.pinimg.com/736x/44/b1/a5/44b1a57b87562c0d22808504ec269706.jpg" }} />
          <Title style={{top:20,left:170,fontSize:30}} >{"Festejo"}</Title>
          <Paragraph style={{top:30, fontSize:20}}> This Afro-Peruvian dance originated in the coastal region of Peru and is characterized by its lively and festive rhythms. The dance is often accompanied by drumming and includes movements that imitate the rhythms of African drums.</Paragraph>
     
  
        </Card.Content>
      </Card>
      
      <Card key={"22"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://inkatrotter.com/wp-content/uploads/2021/02/Huayno-1-e1618504977716.jpg" }} />
          <Title style={{top:20,left:170,fontSize:30}} >{"Huayno"}</Title>
     <Paragraph style={{top:30 , fontSize:20}}> This folk dance is popular in the Andean region and is performed in many festivals and celebrations</Paragraph>
        </Card.Content>
      </Card>
     

<Card key={"65"}  style={styles.item} >
        <Card.Content>
        <Video
        ref={video}
        style={styles.video}
        source={{ uri: 'https://drive.google.com/uc?id=1rl6G44vhteJxeMore0jrf3qaDWL7J1rT' }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
          <Title style={{top:-150,left:70,fontSize:30}}>{"          Marinera"}</Title>
          
          <View style={{top:-110}}>
          <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() => 
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        /></View>
        </Card.Content>
      </Card>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
   
      alignItems: 'center',
      justifyContent: 'center',
  
      
     
    },
    butonlogin2:{
        height:45,
        left:30,       
        top:600,
        width:230,
        backgroundColor: 'red',      
       
        justifyContent: 'center',
        
              
    },

    item:{
        marginTop:16,
        height:450,
    padding: 2,
   width: 500,
  alignitems: "center",
  shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4
    }
    },

    video:{
        width:490,
        height:400,
        top:-100,
        left:-15
    }    
})