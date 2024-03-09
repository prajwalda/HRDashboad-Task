import DrawerSideBar from "../component/DrawerSideBar";
import { Box } from "@mui/material";
import Dashboard from "../component/Dashboard";
import styles from "./Home.module.css"
import Activity from "../component/Activity";
import Scheduler from "../component/Scheduler";

const Home = () => {
  return (
    <div>
      
      <Box className={styles.box}>
        <DrawerSideBar />
        <Dashboard className={styles.left} availablePos={24} JobOpens={10} newEmployee={24}/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Activity />
        <br />
        </Box>
      </Box>
    </div>
  );
};

export default Home;