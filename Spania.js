import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';



export default function Spania({navigation}) {
  return (
    <View style={styles.container}>
    <View > 
  
    <Image
      source={{ uri: 'https://wi-images.condecdn.net/image/LzErqoa8g5V/crop/1440/0.5235602094240838/f/spanish-flag.jpg' }}
      style={styles.imagine}
    />
      <Image
      source={{ uri: 'https://c8.alamy.com/comp/B2D054/children-in-local-traditional-costume-spain-castilla-y-leon-B2D054.jpg' }}
      style={styles.steag}
      fadeDuration={5000}
    />
    
   
    <View style={{top:10}}>
    <Text style={{color:"red", fontSize:35,textAlign: 'center',}}>Spain is renowned for its rich cultural heritage, including its art, architecture, literature, and music. The country is home</Text><Text style={{color:"yellow", fontSize:35,textAlign: 'center',}}> to many famous works of art, such as the paintings of Pablo Picasso and Joan Miró, and its architecture includes the iconic</Text><Text style={{color:"red", fontSize:35,textAlign: 'center',}}> Alhambra palace in Granada and the Sagrada Familia in Barcelona.
        </Text>
    
        </View>
    
      </View> 
      <View>
        <TouchableOpacity style={styles.butonlogin} onPress={()=>navigation.navigate('MancareSpaniaScreen')}>
	<Text style={{color:'white',fontSize:30}}>See the Food </Text>
</TouchableOpacity>
</View><View>
<TouchableOpacity style={styles.butonlogin2} onPress={()=>navigation.navigate('DanceSpain')}>
	<Text style={{color:'white',fontSize:30,left:100}}>See the Dance </Text>
</TouchableOpacity>

        
</View>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor:'black',
    flex: 1,
 
    alignItems: 'center',
    justifyContent: 'center',

    
   
  },

  imagine:{
    
    position:"absolute",
    widht:230,
    height:350,

    position: 'absolute',
    top: -150,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'cover',

    borderColor: 'black',
},
button: {

  top: -70,
  left: 60,
  right: 143.703,
  bottom: 138,
  alignItems: 'center',
  backgroundColor: 'transparent',
  padding: 10,
  width:370.297,
  height:45,
 },
 steag:{
  height:270,
  width:270,
  left:160,
  top:-70,
  borderRadius:150,

},
    butonlogin:{
       
       
        height:50,
        left:-150,
       
        top:140,
        width:330,
        backgroundColor: 'red',
      
        alignItems: 'center', 
        justifyContent: 'center',
        
              
    },
    butonlogin2:{
        height:50,
        left:130,       
        top:90,
        width:330,
        backgroundColor: 'red',      
       
        justifyContent: 'center',
        
              
    },
});
