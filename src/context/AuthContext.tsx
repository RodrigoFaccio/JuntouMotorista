import React,{createContext, useCallback, useContext, useState} from 'react';


interface SignCredentials{
    email:string,
    token:string
}
interface AuthState{
    email:string,
    token:string,
    id:number
}
interface AuthContextData{
    user:object,
    signIn(credentials:SignCredentials):void;
}
 const AuthContext = createContext<AuthContextData>({}as AuthContextData);

 const AuthProvider : React.FC = ({children})=>{
    const [data,setData] = useState<AuthState>(()=>{
        const token = localStorage.getItem('@juntouApp:token');
        const email = localStorage.getItem('@juntouApp:email');
        const id = localStorage.getItem('@juntouApp:id');
        if(token && email && id){
            return{token,email,id} ;
        }
        return {} as AuthState;
    });

    const signIn = useCallback(({email,token,id})=>{
        
        localStorage.setItem('@juntouApp:token',token);
        localStorage.setItem('@juntouApp:email',email);
        localStorage.setItem('@juntouApp:id',id);

        setData({email,token,id});


    },[])
    return(
        <AuthContext.Provider value={{user:data,signIn}}>
            {children}
        </AuthContext.Provider>
    );
    function useAuth(): AuthContextData {
        const context = useContext(AuthContext);
        if(!context){
            throw new Error('Erro No authContext');
        }
        return context;

    }
};
function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('Erro No authContext');
    }
    return context;

}
export {AuthProvider,useAuth};