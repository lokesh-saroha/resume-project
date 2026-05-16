import React, { useContext } from 'react'
import styles from './Login.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import {auth, provider} from "../../util/firebase.jsx";
import { signInWithPopup } from 'firebase/auth';
import { AuthContext } from '../../util/authContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../util/axios.js';

const Login = () => {

    const { isLogin,setLogin,userInfo,setUserInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handlelogin = async ()=>{
        try{
            const result = await signInWithPopup(auth,provider);
            const user = result.user;
            const userdata = {
                name:user.displayName,
                email:user.email,
                photourl:user.photoURL
            }

            await axios.post('/api/user',userdata).then((response)=>{
                console.log(response.data);
                setUserInfo(response.data.user);

                localStorage.setItem("user", JSON.stringify(response.data.user));
            }).catch(err=>{
                console.log(err);
            })


            setLogin(true);
            localStorage.setItem("isLogin",true);
            localStorage.setItem("userInfo",JSON.stringify(userdata));
            navigate('/dashboard');
        }catch(err){
            alert("Something went wrong");
            console.log(err);
        }
    }

  return (
    <div className={styles.Login}>
        <div className={styles.LoginCard}>
            <div className={styles.LoginCardTitle}>
                <h1>Login</h1>
            </div>

            <div onClick={handlelogin} className={styles.googlebutton}><GoogleIcon sx={{fontSize:20,color:"blue"}}/>Sign in with Google
            </div>
        </div>

    </div>
  )
}

export default Login