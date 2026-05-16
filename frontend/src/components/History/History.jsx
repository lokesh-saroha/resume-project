import React, { useContext, useState } from 'react'
import styles from './History.module.css';
import { Skeleton } from '@mui/material';
import withAuthHOC from '../../util/HOC/withAuthHOC';
import axios from '../../util/axios';
import { useEffect } from 'react';
import { LocalCafe } from '@mui/icons-material';
import { AuthContext } from '../../util/authContext';
const History = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const { user } = useContext(AuthContext);


  useEffect(() => {
    const fetchUserData = async () => {
      setLoader(true);

      try {
        console.log(user?._id);
        console.log(user?.name);

        const results = await axios.get(`/api/resume/get/${currentUser._id}`);
        console.log(results.data.resumes);
        setData(results.data.resumes);
      } catch (err) {
        console.log(err);
        alert("Something went wrong!")
      } finally {
        setLoader(false);
      }
    }
    fetchUserData();
  }, []);
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>

        {
          loader && <>

          <Skeleton variant='rectangular' width={266} height={200} sx={{ borderRadius: "20px" }} />
          <Skeleton variant='rectangular' width={266} height={200} sx={{ borderRadius: "20px" }} />
          <Skeleton variant='rectangular' width={266} height={200} sx={{ borderRadius: "20px" }} />
          <Skeleton variant='rectangular' width={266} height={200} sx={{ borderRadius: "20px" }} />

          
          </>
        }

        {
          data.map((item, index) => {
            return (
              <div key={item._id} className={styles.HistoryCard}>
                <div className={styles.cardPercentage}>{item.score}%</div>
                //<h2>{item.job_des}</h2>
                <p>Resume name : {item.resume_Name}</p>
                <p>{item.feedback}</p>
                <p>Dated:{item.createdAt.slice(0,10)}</p>
              </div>
            )
          })
        }




      </div>

    </div>
  )
}

export default withAuthHOC(History);