
import React, { useState } from 'react';
import { View, Image,Text, StyleSheet,TouchableOpacity } from 'react-native';

class MyClass {
    constructor(id, photo, country) {
      this.id = id;
      this.photo = photo;
      this.country = country;
    }
  }

  const peles = new MyClass(1, 'https://picfiles.alphacoders.com/291/291376.jpg', 'Romania  ');

  const bigger = new MyClass(2, 'https://aventurainromania.ro/wp-content/uploads/2017/04/18_Cascada_Bigar.jpg', 'Romania ');
  
  const maramures = new MyClass(3, 'https://i.pinimg.com/originals/c2/8b/ac/c28bac005079e382fcb443c68602751f.jpg', 'Romania');

  const sagrada = new MyClass(4, 'https://th.bing.com/th/id/R.6235256c05e3d8121f45fc15226996f8?rik=UnPlVldRKuvWww&riu=http%3a%2f%2fbarcelona-home.com%2fblog%2fwp-content%2fupload%2f2013%2f10%2fla-sagrada-familia.jpg&ehk=E2DjwahRPM8PSxC5sTTrYqRxT6reripv4WwBwWi%2bGn0%3d&risl=&pid=ImgRaw&r=0', '  Spain  ');

  const madrid = new MyClass(5, 'https://bestcityscape.com/wp-content/uploads/2019/04/Madrid-plaza-Mayor-aerial-view-95045-600x400.jpg', '  Spain ');
  
  const tenerife = new MyClass(6, 'https://www.voymag.com/wp-content/uploads/2020/07/Playa-de-las-Teresitas-Tenerife.jpg', '  Spain');

  const machu = new MyClass(7, 'https://static.wixstatic.com/media/1bdc7f_dbcdfb230e8e4220a319098c720b436e~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg', '    Peru   ');

  const lima = new MyClass(8, 'https://th.bing.com/th/id/OIP.FAkhNvMyD9PhjRmZyWLz7AHaEX?pid=ImgDet&rs=1', '   Peru  ');

  const peisajperu = new MyClass(9, 'https://th.bing.com/th/id/R.71a616dd28ef6b00ed1c5f5f8be28b34?rik=mQciaRPNqUnh3Q&riu=http%3a%2f%2fwww.tourthewild.com%2fwp-content%2fuploads%2f2018%2f06%2fkovalam-1.jpg&ehk=Z8XSyzonDR1RHPqjMnzcf99g%2bFyH2lk34aXg%2bdXELUk%3d&risl=&pid=ImgRaw&r=0', '   Peru        ');

  const peru1 = new MyClass(10, 'https://th.bing.com/th/id/R.600ce62e140230582a1cfb1fa7825ce1?rik=FTbEKL4RkLJqig&riu=http%3a%2f%2fjazztour.ru%2fblog%2fwp-content%2fuploads%2fDominicana-Jazztour-002.jpg&ehk=wMTDjyqIK5ZymLYPL%2f%2bGPPEMZYyVWfoCCRkbCOgnCWE%3d&risl=&pid=ImgRaw&r=0', '   Peru         ');

  const peru2 = new MyClass(11, 'https://th.bing.com/th/id/OIP.pmkWbxx6jt_Kjx_dQnVwJAHaD3?pid=ImgDet&rs=1', '   Peru           ');
  const peru3 = new MyClass(12, 'https://th.bing.com/th/id/OIP.qNPwRRx1q_xuUUt97dphbwHaF_?pid=ImgDet&rs=1', '   Peru            ');
  const peru4 = new MyClass(13, 'https://www.lavozdelnorte.com.mx/wp-content/uploads/2019/09/image-400x243.png', '   Peru             ');
  const peru5 = new MyClass(14, 'https://www.tripsavvy.com/thmb/ZPBAV5dO-FavyHSE0oM1Gfbdxnk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/10670145_10152754838024402_5598903197025311757_nWEB-25c0c297e2314ff2b8ecafc481e2298a.jpg', '   Peru              ');
  const peru6 = new MyClass(15, 'https://www.tripsavvy.com/thmb/KEkFEEJFxEVOZkDoJsBZH4pS0QU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4285770417_cc38418d07_b-5b10442a04d1cf0037ef7b2d.jpg', '   Peru               ');

  const r1 = new MyClass(16, 'https://th.bing.com/th/id/R.5f12ae2ca0e5a63847fd922901038401?rik=0%2fOKFOAcyGiSXA&pid=ImgRaw&r=0', 'Romania    ');
  const r2 = new MyClass(17, 'https://th.bing.com/th/id/R.28f12cc9740af5344d82d9dbc13fecec?rik=TclxTNpN2894zA&riu=http%3a%2f%2faroundthecompass.com%2fwp-content%2fuploads%2f2017%2f01%2fCorvin-castle-from-across-the-bridge.jpg&ehk=LN49HrfoGWn21qRMb36SwF1yr3wpbfvvtChgu3F8bKE%3d&risl=&pid=ImgRaw&r=0', 'Romania     ');

  const r3 = new MyClass(18, 'https://th.bing.com/th/id/R.1103ee2580a1051f436cfcc6e8a2bcb1?rik=ZH3JKe4QvZSsHw&riu=http%3a%2f%2fwww.alusoare.com%2fuploads%2f6%2f6%2f5%2f6%2f66562553%2fdsc06257_orig.jpg&ehk=oUeA%2bIFi%2bQ%2brhuc0MIkK0mgmhJdYyXgMfOo4B4Sfl2Q%3d&risl=&pid=ImgRaw&r=0', 'Romania      ');

  const r4 = new MyClass(19, 'https://th.bing.com/th/id/R.19bacd112c459c0b226f186072f10bbd?rik=hy%2frt9GR1f5ksQ&pid=ImgRaw&r=0', 'Romania       ');
  const s1 = new MyClass(20, 'https://th.bing.com/th/id/OIP.WlnBkYamtU6BzcPiZGZS9wHaEK?pid=ImgDet&rs=1', '  Spain        ');
  const s2 = new MyClass(21, 'https://th.bing.com/th/id/R.8fb6d710a94a3a9deacc632e6d6fc587?rik=Py7FwkR3VRniwQ&riu=http%3a%2f%2ftraveldigg.com%2fwp-content%2fuploads%2f2016%2f09%2fRoyal-Palace-of-Madrid-Pictures.jpg&ehk=Fc9KGjOvbgtqreCZit2dUmrrzWBm12NimtV%2f%2b3r%2byW4%3d&risl=&pid=ImgRaw&r=0', '  Spain         ');

  const s3 = new MyClass(22, 'https://th.bing.com/th/id/R.dbb68afd4516d4abc124c784bd3ba65d?rik=Rsg2iOIpJfN6RQ&pid=ImgRaw&r=0', '  Spain          ');

  const s4 = new MyClass(23, 'https://th.bing.com/th/id/OIP._jkrRNiVl8rCsE8rh1MEVgHaE7?pid=ImgDet&rs=1', '  Spain            ');

  const myList = [peles, bigger,maramures,sagrada,madrid, tenerife, machu, lima,peisajperu, peru1,peru2,peru3,peru4,peru5,peru6,s1,s2,s3,s4,r1,r2,r3,r4];



  


  export function Game () {
    const dearatat = new MyClass(0, '', '');
    let randomInt = Math.floor(Math.random() * 23);
    
    dearatat.id = myList[randomInt].id
    dearatat.photo= myList[randomInt].photo 
    dearatat.country=myList[randomInt].country

    
    console.log(dearatat.country)
    

    const [text, TellTheTruth] = useState('');
  
    
    return(
  
    <View >
         <Image
      source={{ uri:dearatat.photo }}
      style={styles.imagine}
      

    /> 
    <Text>{dearatat.id}</Text>
    <TouchableOpacity style={styles.button} onPress={()=> {TellTheTruth(dearatat.country)}}>
<Text style={{ color: 'black', fontSize:30 }}>a: Romania</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={()=>TellTheTruth(dearatat.country)}>
<Text style={{ color: 'black', fontSize:30 }}>b: Spain</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button} onPress={()=>TellTheTruth(dearatat.country)}>
<Text style={{ color: 'black', fontSize:30 }}>c: Peru</Text>
  </TouchableOpacity>
  <Text style={{fontSize:50, left:100, top:100, color:'green'}}>{text}</Text>

  


 

    </View>)
  }


const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor: 'white',
        
      },
      stiltext:
      {
        height:20,
        top:0
      },

      button2: {
	 
        top: 120,
        left: -30,
        right: 143.703,
        bottom: 138,
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        width:470.297,
        height:85,
     },
      imagine:{
        widht:200,
        height:350,
        left:0,
           top:0,
           

  
   }
})
