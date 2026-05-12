import { createContext, useState } from "react";


export const authContext = createContext();

const authProvider = ({children})=>{
    var login = localStorage.getItem('isLogin');
    var userInfoData = localStorage.getItem('userInfo');
    const [isLogin,setLogin] = useState(login?login:false);
    const [userInfo,setUserInfo]= useState(userInfoData? JSON.parse(userInfoData):null);

    return (
        <authContext.Provider value={{isLogin,setLogin,userInfo,setUserInfo}}>
            {children}
        </authContext.Provider>
    );
}

export default authProvider;