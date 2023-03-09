import * as React from 'react';
import { View, StyleSheet,TouchableOpacity,Text, Button, ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Card, Title, Paragraph } from 'react-native-paper';

export  function DanceSreen() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <ScrollView>
      <Card key={"53"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://cooltneamt.ro/wp-content/uploads/2021/05/Sarba-1536x864.jpg" }} />
          <Title style={{top:20,left:170,fontSize:30}} >{"Sarba"}</Title>
       <Paragraph style={{top:25,fontSize:20}}>Sârba is a couple's dance that is popular in many regions of Romania. It is typically performed to fast-paced music and involves intricate footwork and movements such as spinning and turning.</Paragraph>
  
        </Card.Content>
      </Card>
      
      <Card key={"52"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://i.ytimg.com/vi/4cdmzJt3uW8/maxresdefault.jpg" }} />
          <Title style={{top:20,left:170,fontSize:30}} >{"Ciuleandra"}</Title>
     <Paragraph style={{top:25,fontSize:20}}>Ciuleandra is a traditional Romanian dance that is known for its fast-paced, energetic movements and is often performed to lively music played on instruments such as the accordion or the violin.</Paragraph>
        </Card.Content>
      </Card>


<Card key={"55"}  style={styles.item} >
        <Card.Content>
        <Video
        ref={video}
        style={styles.video}
        source={{ uri: 'https://drive.google.com/uc?id=1GM-A0dNy2tulb9_gPwnmRT0GR18We9Ea' }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
          <Title style={{top:-150,left:150,fontSize:30}}>{"Hora de mana"}</Title>
          
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