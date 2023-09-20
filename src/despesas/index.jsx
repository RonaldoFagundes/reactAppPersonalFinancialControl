import { Text , View } from "react-native"



export default function  Despesas({navigation}){

  

          return (
             
               <View>
                  <Text>Tela Despesas</Text>


                  <TouchableOpacity
                  onPress={navigation.navigate("Home")}
                >
                   <Text>Tela Home</Text>
                </TouchableOpacity>
               </View>
          )

      
};