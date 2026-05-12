import React from 'react'
import styles from './Dashboard.module.css';
import { DisplaySettings } from '@mui/icons-material';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { Skeleton } from '@mui/material';
import withAuthHOC from '../../util/HOC/withAuthHOC';
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardLeft}>
        <div className={styles.dashboardHeader}>
          <div className={styles.dashboardHeaderTitle}> Resume screening </div>
          <div className={styles.dashboardHeaderLargeTitle}>Resume match score</div>
        </div>

        <div className={styles.alertInfo}>
          <div> Important Instructions</div>
          <div className={styles.dashboardInstruction}>
            <div>!!! Please paste the complete job description in the "Job Description" field</div>
            <div>!!! Only PDF format resumes are supported</div>
          </div>
        </div>

        <div className={styles.dashboardUpload}>
          <div className={styles.dashboardResumeBlock}>
            Upload your resume
          </div>
          <div className={styles.dashboardInputField}>
            <label htmlFor='InputField' className={styles.analyzeAIButton}>Upload Resume</label>
            <input type='file' accept='.pdf' id='InputField' />
          </div>
        </div>
      

      <div className={styles.jobDes}>
        <textarea className={styles.textArea} placeholder='Enter your job description' rows={10} cols={50}></textarea>
        <div className={styles.analyzeButton}>Analyze</div>
      </div>
      </div>

      <div className={styles.dashboardRight}>
        <div className={styles.dashboardRightTopCard}>
          <div>Analyze with AI</div>
          <img className={styles.profileImage} src='https://m.media-amazon.com/images/S/pv-target-images/8b93517977ec09e678288be5fb83486dc39dead1b45cba6c690d207117fe748f._SX1080_FMjpg_.jpg'></img>
          <h2> username</h2>
        </div>

        {/* <div className={styles.dashboardRightTopCard}>
          <div>Result</div>
          <div style={{display:"flex", justifyContent: "center", alignItems : "center", gap: "20px"}}>
            <h1>70%</h1>
            <CreditScoreIcon/>
          </div>
          <div className={styles.feedback}>
            <h3>Feedback</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque est illo quam doloremque voluptate. Rem, iusto consectetur! Qui nihil, eius officia, doloribus velit molestias deleniti corporis dolorum numquam omnis quos.</p>
          </div>
        </div> */}
        <Skeleton variant="rectangular" sx={{borderRadius:"20px"}} width={300} height={200}/>
      </div>
    </div>
  )
}

export default withAuthHOC(Dashboard);