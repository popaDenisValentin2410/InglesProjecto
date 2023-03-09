import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

export  function Europa ({navigation}){
    return(
<View style={styles.screen} >

<Image fadeDuration={2000} style={styles.imagine} resizeMode="cover" source={{ uri: 'https://drive.google.com/uc?id=14dosch0vQWhEwdVpyRHKFbNKVJds6z5s' }}></Image>

    


  <TouchableOpacity style={styles.button3} onPress={()=>navigation.navigate('Romania')}>
<Text style={{ color: 'blue', fontSize:20 }}>Romania</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Spania')}>
<Text style={{ color: 'blue', fontSize:20 }}>Spain</Text>
  </TouchableOpacity>



    </View>
    )}
const styles = StyleSheet.create({
	screen:{
	  flex:1,
	  backgroundColor: 'black',
	  
	},
	button: {
	 
	  top: 20,
	  left: -90,
	  right: 143.703,
	  bottom: 138,
	  alignItems: 'center',
	  backgroundColor: 'transparent',
	  padding: 10,
	  width:370.297,
	  height:45,
   },

   button2: {
	 
	  top: -120,
	  left: -40,
	  right: 143.703,
	  bottom: 138,
	  alignItems: 'center',
	  backgroundColor: 'transparent',
	  padding: 10,
	  width:370.297,
	  height:45,
   },

   button3: {
	 
	top: 10,
	left: 260,
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
		
		  left:0,
			 top:150,
			 height:600

    
	 }})