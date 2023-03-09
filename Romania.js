import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';



export default function Romania({navigation}) {
  return (
    <View style={styles.container}>
    <View > 
  
    <Image
      source={{ uri: 'https://integratedbakery.com/app/uploads/2020/11/romanian-flag-large-1024x683.gif' }}
      style={styles.imagine}
    />
      <Image
      source={{ uri: 'https://i.pinimg.com/originals/eb/a0/54/eba054651667afd51032a645551d7a44.jpg' }}
      style={styles.steag}
      fadeDuration={5000}
    />
    
   
    <View style={{top:10}}>
    <Text style={{color:"blue", fontSize:35,textAlign: 'center',}}>Romania is known for its rich cultural heritage, which is a blend of Balkan, Slavic, and Hungarian </Text><Text style={{color:"yellow", fontSize:35,textAlign: 'center'}}>influences. The country is famous for its stunning landscapes, including the Carpathian Mountains,</Text><Text style={{color:"red", fontSize:35,textAlign: 'center'}}> the Danube Delta, and the painted monasteries of Bucovina.

        </Text>
    
        </View>
    
      </View> 
      <View>
        <TouchableOpacity style={styles.butonlogin} onPress={()=>navigation.navigate('MancareRomaniaScreen')}>
	<Text style={{color:'white',fontSize:30}}>See the Food </Text>
</TouchableOpacity>
</View><View>
<TouchableOpacity style={styles.butonlogin2} onPress={()=>navigation.navigate('DanceSreen')}>
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
       
       
        height:70,
        left:-150,
       
        top:170,
        width:330,
        backgroundColor: 'red',
      
        alignItems: 'center', 
        justifyContent: 'center',
        
              
    },
    butonlogin2:{
        height:70,
        left:130,       
        top:100,
        width:330,
        backgroundColor: 'red',      
       
        justifyContent: 'center',
        
              
    },
});
