import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/home';

const Stack = createNativeStackNavigator();




   function Routes () 
   {
     
       return (
          
            <Stack.Navigator
             
               screenOptions ={{
                  
                    headerShow:false
               }}
            >


            <Stack.Screen
              name="Home"
              component={Home}

              options={{
               headerShow:false
              }}
            />  


            </Stack.Navigator>
       ) 
   }

   export default Routes;