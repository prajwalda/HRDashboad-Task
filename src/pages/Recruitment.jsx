import React from 'react'
import DrawerSideBar from '../component/DrawerSideBar'
import Activity from '../component/Activity'
import { Box } from '@mui/material'
import styles from "./Home.module.css"
import AccordianComp from '../component/AccordianComp'


const Recruitment = () => {
  return (
    <div>
      
      <Box className={styles.box}>
        <DrawerSideBar />
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <AccordianComp/>
        <br />
        </Box>
      </Box>
    </div>
  )
}

export default Recruitment
