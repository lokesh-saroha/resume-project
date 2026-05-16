import React, { useContext, useState } from 'react'
import styles from './Dashboard.module.css';
import { DisplaySettings } from '@mui/icons-material';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { Skeleton } from '@mui/material';
import withAuthHOC from '../../util/HOC/withAuthHOC';
import axios from '../../util/axios';
import { AuthContext } from '../../util/authContext';
const Dashboard = () => {
  const [uploadFileText, setUploadFileText] = useState("Upload your resume")
  const [loading, setLoading] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDes, setJobDes] = useState("");
  const [result, setResult] = useState(null);
  const { userInfo } = useContext(AuthContext);

  const handleOnChangeFile = (e) => {
    setResumeFile(e.target.files[0]);
    setUploadFileText(e.target.files[0].name);
  }


  const handleUpload = async () => {
    setResult(null);
    if (!jobDes || !resumeFile) {
      alert("Fill job description and upload resume");
      return;
    }
    console.log(userInfo);
    console.log(userInfo?._id);
    const currentUser = JSON.parse(localStorage.getItem("user"));
    console.log(currentUser);
    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("job_des", jobDes);
    formData.append("user", currentUser._id);
    setLoading(true);

    try {
      const result = await axios.post('/api/resume/addResume', formData);
      setResult(result.data.data);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }

  }

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
            {uploadFileText}
          </div>
          <div className={styles.dashboardInputField}>
            <label htmlFor='InputField' className={styles.analyzeAIButton}>Upload Resume</label>
            <input onChange={handleOnChangeFile} type='file' accept='.pdf' id='InputField' />
          </div>
        </div>


        <div className={styles.jobDes}>
          <textarea onChange={(e) => { setJobDes(e.target.value) }} value={jobDes} className={styles.textArea} placeholder='Enter your job description' rows={10} cols={50}></textarea>
          <div onClick={handleUpload} className={styles.analyzeButton}>Analyze</div>
        </div>
      </div>

      <div className={styles.dashboardRight}>
        <div className={styles.dashboardRightTopCard}>
          <div>Analyze with AI</div>
          <img className={styles.profileImage} src={userInfo?.photourl}></img>
          <h2> {userInfo?.name}</h2>
        </div>

        {
          result && <div className={styles.dashboardRightTopCard}>
            <div>Result</div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
              <h1>{result?.score}%</h1>
              <CreditScoreIcon />
            </div>
            <div className={styles.feedback}>
              <h3>Feedback</h3>
              <p>{result?.feedback}</p>
            </div>
          </div>
        }
        {
          loading && <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }} width={300} height={200} />
        }
      </div>
    </div>
  )
}

export default withAuthHOC(Dashboard);