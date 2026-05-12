import { useEffect,useContext } from "react"
import { useNavigate } from "react-router-dom"
import { authContext } from "../authContext"


const withAuthHOC = (wrappedComponent)=>{
    // const {setLogin} = useContext(authContext)
    return (props)=>{
        const navigate = useNavigate();
        useEffect(()=>{
            const isLogin = localStorage.getItem('isLogin');

            if(!isLogin){
                // setLogin(false)
                navigate('/')

                return;
            }
        },[])

        return <wrappedComponent {...props}/>;
    }
}

export default withAuthHOC;