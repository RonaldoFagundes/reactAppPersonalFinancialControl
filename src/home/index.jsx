import { Text, TextInput, View } from "react-native"

import React, { useContext, useState, useEffect, } from 'react';




import { AuthContext } from '../context/auth';
import { TouchableOpacity } from "react-native-web";


export default function Home ({navigation}){




   const  { setSaldo , saldo } = useContext(AuthContext);





    

    




    
     const handleInputChange=(value)=>{
        
      
           setSaldo(value)
         
     }




      return (

         <View>


            <Text>Tela Home</Text>


            <Text>{` Saldo Especie ${saldo}`}</Text>


           <View>
                
             

                 <TextInput
                   placeholder=" digite o saldo"
                   placeholderTextColor="#BBD441"
                   type="text"

                    onChangeText={
                       (valor)=>handleInputChange(valor)
                      }
                    

                     // value={}
                  />                  
                


                <TouchableOpacity
                  onPress={navigation.navigate("Despesas")}
                >
                   <Text>Tela Despesas</Text>
                </TouchableOpacity>
                  
           </View>




         </View>


      )

      






}