import { Text, View } from "react-native";
import {useEffect, useState } from 'react';




    


export default function Teste(){





   const [result, setResult] = useState(0);



  
   useEffect(()=>{

     calcularPotenciacao(4,3);

  },[]); 





    const calcularPotenciacao=(base , expoente)=>{
        
     let res = 1;
       
          for (let i = 0 ; i < expoente ; i++){            

              setResult(res = res * base );

          }

    }
 



    return(
        
       <View 

          style={{ 

            backgroundColor: '#000000',
            width:'auto',
            height:100 ,
            padding:20
            
          }}
          >


         <Text 
         
          style={{ color: '#00FF00' }}
          >            
            App controle Financerio
            
         </Text>




         <Text 
         
          style={{ color: '#DAA520' }}
          >            
            Criar repositorio no github
            
         </Text>




         <Text 
         
         style={{ color: '#00FFFF' }}
         >            
           Criar banco dados 
           
        </Text>





        <Text 
         
         style={{ color: '#00FFFF' }}
         >            
           {` Exponenciação  ${result} `}
           
        </Text>






       </View>

    );
}




/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  return (

    <View style={styles.container}>

      <Text>Open up App.js to start working on your app!</Text>

      <Text>ReactAppPersonalFinancialControl</Text>

      <Text>Testar no expo app</Text>

      <StatusBar style="auto" />

    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/