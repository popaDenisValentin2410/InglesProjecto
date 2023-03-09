import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity ,Text ,StyleSheet, Image, TextInput, View } from 'react-native';
import Brazilia from './Brazilia';
import Peru from './Peru';
import { MancareScreen } from './MancareScreen';
import {MancarePeruScreen} from './MancarePeruScreen';
import {MancareRomaniaScreen} from './MancareRomaniaScreen';
import Romania from './Romania';
import Spania from './Spania';
import { MancareSpaniaScreen } from './MancareSpaniaScreen';
import { AmericaSud } from './AmericaSud';
import { Europa } from './Europa';

import { Game } from './Game';
import { DanceSreen } from './DanceSreen';
import { DanceSpain } from './DanceSpain';

import { DancePeru } from './DancePeru';
const Stack = createStackNavigator();

function App({ navigation }) {

  return (
	
	<View style={styles.screen}>
		<Image
      source={{ uri: 'https://th.bing.com/th/id/R.1d90d3a5260f7d9917b2352593a8e050?rik=bA%2b%2fTEapYW7spA&riu=http%3a%2f%2fwww.ziarulmetropolis.ro%2fwp-content%2fuploads%2f2014%2f02%2f710px-Bucharest_collage.jpg&ehk=DPKSm5fiDJuGEBIByLrVWrPe622G6pQ%2ftwLZT%2bfkG2Y%3d&risl=&pid=ImgRaw&r=0' }}
      style={styles.imagine}

    />
	 <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Europa')}>
<Text style={{ color: 'white', fontSize:90 }}>Europe</Text>
  </TouchableOpacity>
		 
  <Image
      source={{ uri: 'https://www.boisestate.edu/undergraduate-research/files/2020/04/240-fig1-1024x673.png' }}
      style={styles.imagine2}
    />
 <TouchableOpacity style={styles.button3} onPress={()=>navigation.navigate('AmericaSud')}>
<Text style={{ color: 'white', fontSize:90 }}>South America</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate('Game')}>
<Text style={{ color: 'white', fontSize:30,top:10 }}>Guess the country by the view</Text>
  </TouchableOpacity>

 
	</View>

  );
}

function AppContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App" component={App} />
		<Stack.Screen name="AmericaSud" component={AmericaSud} />

		<Stack.Screen name="Europa" component={Europa} />
		<Stack.Screen name="Brazilia" component={Brazilia} />
		<Stack.Screen name="DanceSreen" component={DanceSreen} /> 
    <Stack.Screen name="MancareScreen" component={MancareScreen} />
	<Stack.Screen name="MancarePeruScreen" component={MancarePeruScreen} />
    <Stack.Screen name="Peru" component={Peru} />
	<Stack.Screen name="Romania" component={Romania} />
	<Stack.Screen name="Spania" component={Spania} />
	<Stack.Screen name="DanceSpain" component={DanceSpain} />
	<Stack.Screen name="MancareRomaniaScreen" component={MancareRomaniaScreen} />
	<Stack.Screen name="MancareSpaniaScreen" component={MancareSpaniaScreen} />

	
	<Stack.Screen name="DancePeru" component={DancePeru} />

	<Stack.Screen name="Game" component={Game} />
	
    
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
	screen:{
	  flex:1,
	  backgroundColor: 'white',
	  
	},
	button: {
	 
	  top: -320,
	  left: 85,
	  right: 143.703,
	  bottom: 138,
	  alignItems: 'center',
	  backgroundColor: 'transparent',
	  padding: 10,
	  width:370.297,
	  height:117,
   },

   button2: {
	 
	  top: -683,
	  left: -30,
	  right: 143.703,
	  bottom: 138,
	  alignItems: 'center',
	  backgroundColor: 'black',
	  padding: 10,
	  width:670.297,
	  height:85,
   },

   button3: {
	 
	top: -330,
	left: -42,
	right: 143.703,
	bottom: 138,
	alignItems: 'center',
	backgroundColor: 'transparent',
	padding: 10,
	width:670.297,
	height:115,
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
	 imagine2:{
		widht:200,
		height:450,
		left:0,
		   top:-30,

  
   },
   
	 imagine:{
		  widht:200,
		  height:450,
		  left:0,
			 top:0,

    
	 }})
export default AppContainer;

