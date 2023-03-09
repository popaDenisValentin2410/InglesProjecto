import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View,TouchableOpacity } from 'react-native';


export  function AmericaSud ({navigation}){
    return(
<View style={styles.screen} >



<Image fadeDuration={2000} style={styles.imagine} resizeMode="cover" source={{ uri: 'https://drive.google.com/uc?id=1SzVT9FUiMxhqKPImxp9ARq2SrNF7wVw6' }}></Image>

<TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Brazilia')}>
<Text style={{ color: 'blue', fontSize:25 }}>Brazil</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate('Peru')}>
<Text style={{ color: 'blue', fontSize:25 }}>Peru</Text>
  </TouchableOpacity>
  




    </View>
    )}
const styles = StyleSheet.create({
	screen:{
	  flex:1,
	  backgroundColor: 'black',
	  
	},
	button: {
	 
	  top: -200,
	  left: 200,
	  right: 143.703,
	  bottom: 138,
	  alignItems: 'center',
	  backgroundColor: 'transparent',
	  padding: 10,
	  width:370.297,
	  height:55,
   },

   button2: {
	 
	  top:-280,
	  left: -35,
	  right: 143.703,
	  bottom: 138,
	  alignItems: 'center',
	  backgroundColor: 'transparent',
	  padding: 10,
	  width:370.297,
	  height:55,
   },

   button3: {
	 
	top: -40,
	left: -40,
	right: 143.703,
	bottom: 138,
	alignItems: 'center',
	backgroundColor: 'transparent',
	padding: 10,
	width:370.297,
	height:45,
 },
  
	   butonlogin:{
		  position:'absolute',
		  bottom:138,
		  height:45,
		  left:55,
		  right:143.703,
		  top:582,
		  width:300,
		  backgroundColor: 'black',
		  borderRadius: 50,
		  alignItems: 'center', 
		  justifyContent: 'center',
		  
				
	  },
  
	   stilentry:{
		   backgroundColor: 'white',
		   borderColor: 'black',
		   borderWidth: 0.5,
		   padding: 10,
		   position:"absolute",
		   bottom:378,
		   height:46,
		   left:30,
		  top:450,
		   right:79,
		   width:350,
		  alignItems: 'center', 
		  justifyContent: 'center',
		  borderRadius: 50,
		  textAlign: 'center',
		  borderRadius: 50,
			shadowColor: 'black',
			shadowOffset: { width: 2, height: 2 },
			shadowOpacity: 0.5,
			shadowRadius: 60,
			elevation: 10,
			opacity: 5.8,
  
	  },
  
	  stilentryuser:{
		  backgroundColor: 'white',
		  borderColor: 'black',
		  borderWidth: 0.5,
		  padding: 10,
		  position:"absolute",
		  bottom:378,
		  height:46,
		  left:30,
			 top:370,
		  right:79,
		  width:350,
		  textAlign: 'center',
			borderRadius: 50,
			shadowColor: 'black',
			shadowOffset: { width: 2, height: 2 },
			shadowOpacity: 0.5,
			shadowRadius: 60,
			elevation: 10,
			opacity: 5.8,
		
  
	 },
   statusbarstil:{
    backgroundColor:'#40E0D0'
   },
  
	 imagine:{
		  widht:500,
		  height:600,
		  left:5,
			 top:200,

    
	 }})