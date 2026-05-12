import React from 'react'
import styles from './Admin.module.css';
import { Skeleton } from '@mui/material';
import withAuthHOC from '../../util/HOC/withAuthHOC';
const Admin = () => {
  return (
    <div className={styles.Admin}>
      <div className={styles.AdminBlock}>

        <Skeleton variant='rectangular' width={266} height={400} sx={{borderRadius:"20px"}} />

        <div className={styles.AdminCard}>
          <h2>loki</h2>
          <p style={{color:"blue"}}>email id</p>
          <h3>score : 50%</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam minima tenetur qui corporis iure rem sint. Animi iure veniam ipsum quos, ea voluptate accusantium similique autem modi vero minima.</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>loki</h2>
          <p style={{color:"blue"}}>email id</p>
          <h3>score : 50%</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam minima tenetur qui corporis iure rem sint. Animi iure veniam ipsum quos, ea voluptate accusantium similique autem modi vero minima.</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>loki</h2>
          <p style={{color:"blue"}}>email id</p>
          <h3>score : 50%</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam minima tenetur qui corporis iure rem sint. Animi iure veniam ipsum quos, ea voluptate accusantium similique autem modi vero minima.</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>loki</h2>
          <p style={{color:"blue"}}>email id</p>
          <h3>score : 50%</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam minima tenetur qui corporis iure rem sint. Animi iure veniam ipsum quos, ea voluptate accusantium similique autem modi vero minima.</p>
        </div>

        <div className={styles.AdminCard}>
          <h2>loki</h2>
          <p style={{color:"blue"}}>email id</p>
          <h3>score : 50%</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam minima tenetur qui corporis iure rem sint. Animi iure veniam ipsum quos, ea voluptate accusantium similique autem modi vero minima.</p>
        </div>

      </div>
    </div>
  )
}

export default withAuthHOC(Admin);