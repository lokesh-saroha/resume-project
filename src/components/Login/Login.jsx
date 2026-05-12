import React from 'react'
import styles from './Login.module.css';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
    <div className={styles.Login}>
        <div className={styles.LoginCard}>
            <div className={styles.LoginCardTitle}>
                <h1>Login</h1>
            </div>

            <div className={styles.googlebutton}>
                <GoogleIcon sx={{fontSize:20,color:"blue"}}/>
                Sign in with Google
            </div>
        </div>

    </div>
  )
}

export default Login