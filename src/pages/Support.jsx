import React from 'react'
import DrawerSideBar from '../component/DrawerSideBar'
import Activity from '../component/Activity'
import { Box } from '@mui/material'
import styles from "./Home.module.css"
import SupportPage from './SupportPage'


const Support = () => {
  return (
    <div>
      
      <Box className={styles.box}>
        <DrawerSideBar />
        <SupportPage/>
      </Box>
    </div>
  )
}

export default Support;
