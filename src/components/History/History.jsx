import React from 'react'
import styles from './History.module.css';
import { Skeleton } from '@mui/material';
import withAuthHOC from '../../util/HOC/withAuthHOC';
const History = () => {
  return (
    <div className={styles.History}>
      <div className={styles.HistoryCardBlock}>

        <Skeleton variant='rectangular' width={266} height={200} sx={{borderRadius:"20px"}} />

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, labore soluta accusantium assumenda incidunt dolorum. Similique blanditiis modi minima tempore. Voluptas nam, quibusdam corrupti tenetur libero quo. Nobis, tenetur praesentium!</p>
          <p>dated: 2026-05-12</p>
        </div>

        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, labore soluta accusantium assumenda incidunt dolorum. Similique blanditiis modi minima tempore. Voluptas nam, quibusdam corrupti tenetur libero quo. Nobis, tenetur praesentium!</p>
          <p>dated: 2026-05-12</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, labore soluta accusantium assumenda incidunt dolorum. Similique blanditiis modi minima tempore. Voluptas nam, quibusdam corrupti tenetur libero quo. Nobis, tenetur praesentium!</p>
          <p>dated: 2026-05-12</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, labore soluta accusantium assumenda incidunt dolorum. Similique blanditiis modi minima tempore. Voluptas nam, quibusdam corrupti tenetur libero quo. Nobis, tenetur praesentium!</p>
          <p>dated: 2026-05-12</p>
        </div>
        <div className={styles.HistoryCard}>
          <div className={styles.cardPercentage}>80%</div>
          <h2>Frontend developer</h2>
          <p>Resume name : Resume.pdf</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, labore soluta accusantium assumenda incidunt dolorum. Similique blanditiis modi minima tempore. Voluptas nam, quibusdam corrupti tenetur libero quo. Nobis, tenetur praesentium!</p>
          <p>dated: 2026-05-12</p>
        </div>


      </div>

    </div>
  )
}

export default withAuthHOC(History);