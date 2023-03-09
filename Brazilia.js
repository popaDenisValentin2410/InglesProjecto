import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';



export default function Brazilia({navigation}) {
  return (
    <View style={styles.container}>
    <View> 
    <Image
      source={{ uri: 'https://th.bing.com/th/id/R.1d0b703fe9e05b411dfd8b95b87edc8e?rik=N%2fYOaReqcGw0QA&riu=http%3a%2f%2fcliparts.co%2fcliparts%2f8ix%2fE6M%2f8ixE6M8ip.png&ehk=DuBsLnkXZmlGSsOFgSwEuCo0knxDudars%2bYgnvVRo7A%3d&risl=&pid=ImgRaw&r=0' }}
      style={styles.steag}
    />
    <View style={{top:30}}>
    <Text style={{color:"black",textAlign: 'center', fontSize:25,alignContent:"center"}}>Brazil is a country with a rich and diverse culture, shaped by its indigenous peoples, African slaves, European settlers, and other immigrant groups. The result is a unique blend of traditional and modern cultural elements that make Brazil one of the most vibrant and exciting countries in the world.

        </Text>
    
        </View>
        {/* <Text>


 Music is an integral part of Brazilian culture, and the country is known for its various musical genres such as samba, bossa nova, and forró. These styles are a fusion of African rhythms, European melody, and indigenous instruments, and have been embraced globally.
</Text><Text>
The country is also famous for its vibrant and colorful festivals, including Carnival, which is celebrated in the weeks leading up to Lent. During this time, Brazilians take to the streets to dance, sing, and party, showcasing their rich cultural heritage and love of life.
</Text><Text>
Brazilian cuisine is a mix of indigenous, African, and European flavors and cooking styles, and is known for dishes such as feijão, a hearty bean stew, and churrasco, barbecued meat. The country is also known for its diverse street food, with options ranging from acarajé, a deep-fried bean cake, to pastel, a fried pastry filled with meat or cheese.
</Text><Text>
The country is also home to a vibrant arts and literature scene, with writers such as Jorge Amado and Paulo Coelho gaining international recognition. In terms of visual arts, the country has produced several world-famous artists, including Candido Portinari and Tarsila do Amaral.
</Text><Text>
In conclusion, the culture of Brazil is a unique and vibrant mixture of influences from its indigenous, African, and European heritage, as well as from its diverse immigrant populations. From music and festivals to food and art, the country continues to celebrate its rich cultural heritage and traditions.
</Text> */}
      </View> 
      <View>
        <TouchableOpacity style={styles.butonlogin} onPress={()=>navigation.navigate('MancareScreen')}>
	<Text style={{color:'#ffe4c4',fontSize:20}}>See the Food </Text>
</TouchableOpacity>
</View><View>
<TouchableOpacity style={styles.butonlogin2} onPress={()=>navigation.navigate('MancareScreen')}>
	<Text style={{color:'#ffe4c4',fontSize:20, alignContent:"center"}}>See the Dance </Text>
</TouchableOpacity>

        
</View>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8BFF62',
    alignItems: 'center',
    justifyContent: 'center',

    
   
  },

  imagine:{
    position: 'absolute',
    widht:200,
    height:350,
    left:-130,
    top:-150,
    borderRadius: 130,
    borderColor: 'black',
},

    steag:{
        height:200,
        width:200,
        left:100,
        top:-30,

    },
    butonlogin:{
       
       
        height:45,
        left:-100,
       
        top:85,
        width:230,
        backgroundColor: '#336FFF',
      
        alignItems: 'center', 
        justifyContent: 'center',
        
              
    },
    butonlogin2:{
        height:45,
        left:130,       
        top:40,
        width:230,
        backgroundColor: '#336FFF',      
       
        justifyContent: 'center',
        
              
    },
});
