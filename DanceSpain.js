import * as React from 'react';
import { View, StyleSheet,TouchableOpacity,Text, Button, ScrollView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Card, Title, Paragraph } from 'react-native-paper';

export function DanceSpain() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <ScrollView>
      <Card key={"58"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://dancewithmeusa.com/wp-content/uploads/2017/08/Paso-Doble.jpg" }} />
          <Title style={{top:20,left:140,fontSize:30}} >{" Paso Doble"}</Title>
          <Paragraph style={{top:20,fontSize:20}}>Paso Doble is a fast-paced dance that is often performed in bullfights and other cultural events. The dance is performed by a couple, with the man portraying the bullfighter and the woman as his cape.</Paragraph>
        </Card.Content>
      </Card>
      
      <Card key={"22"}  style={styles.item} >
        <Card.Content>
        <Card.Cover source={{ uri:"https://i.pinimg.com/originals/2e/54/b6/2e54b632268be2e8c196e75b07aca897.jpg" }} />
          <Title style={{top:20,left:170,fontSize:30}} >{"Fandango"}</Title>
          <Paragraph style={{top:20, fontSize:20}}>Fandango is a lively and energetic Spanish dance that is characterized by fast footwork and rhythmic clapping, and it is often performed at festivals and celebrations in many regions of Spain.</Paragraph>
        
        </Card.Content>
      </Card>

<Card key={"65"}  style={styles.item} >
        <Card.Content>
        <Video
        ref={video}
        style={styles.video}
        source={{ uri: 'https://drive.google.com/uc?id=1HFUuvsPOdwQAo1KAFsBC4N03v9XSrfPg' }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
          <Title style={{top:-150,left:130,fontSize:30}}>{"   Flamenco"}</Title>
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