import React from 'react'
import DrawerSideBar from '../component/DrawerSideBar'
import Activity from '../component/Activity'
import { Box } from '@mui/material'
import styles from "./Home.module.css"
import AccordianComp from '../component/AccordianComp'
import Dashboard from '../component/Dashboard'


const Employee = () => {
  return (
    <div>
      
      <Box className={styles.box}>
        <DrawerSideBar />
        <Dashboard/>
      </Box>
    </div>
  )
}

export default Employee
