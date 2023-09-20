import React , {createContext , useState} from 'react';

export const AuthContext = createContext({});






  function AuthProvider({children}){


      const [saldo , setSaldo] = useState(0);



        return (

              <AuthContext.Provider value={
              
                {

                  setSaldo,
                  saldo

                }
              
              } >
                
                 {children}
              </AuthContext.Provider>


            
        )

  }

   export default AuthProvider;