import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';



export default function Peru({navigation}) {
  return (
    <View style={styles.container}>
    <View> 
    <Image
      source={{ uri: 'https://th.bing.com/th/id/R.10a4b0d5da7b6022c854964eed6d97d5?rik=iUF7Fz3Zyftd9Q&riu=http%3a%2f%2fs1.bwallpapers.com%2fthumbs2%2f2014%2f05%2f29%2fperu-flag_122043602.jpg&ehk=pFZU45yEBiaB%2fjGwCupIxi8umBv7EbvBnYN9iu6ynWo%3d&risl=&pid=ImgRaw&r=0' }}
      style={styles.imagine}
    />
      <Image
      fadeDuration={5000}
      source={{ uri: 'https://thumbs.dreamstime.com/z/portrait-latin-baby-girl-dressed-up-traditional-folklore-peruvian-colorful-costume-street-parade-lima-peru-june-150508335.jpg' }}
      style={styles.steag}
    />
    <View style={{top:0}}>
    <Text style={{color:"red", fontSize:35,textAlign: 'center',}}>Peru is known for its diverse cuisine, which blends indigenous ingredients with Spanish, African, and Asian influences. Some of</Text><Text style={{color:"white", fontSize:35,textAlign: 'center',}}> the most famous dishes include ceviche, a raw seafood dish marinated in lemon or lime juice,</Text><Text style={{color:"red", fontSize:35,textAlign: 'center',}}> and lomo saltado, a stir-fry made with beef, potatoes, and peppers.

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
        <TouchableOpacity style={styles.butonlogin} onPress={()=>navigation.navigate('MancarePeruScreen')}>
	<Text style={{color:'white',fontSize:30}}>See the Food </Text>
</TouchableOpacity>
</View><View>
<TouchableOpacity style={styles.butonlogin2} onPress={()=>navigation.navigate('DancePeru')}>
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
