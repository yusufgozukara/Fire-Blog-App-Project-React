import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { AuthContext } from "../contexts/AuthContext";
import {useFetch} from '../helpers/functions';

const Dashboard = () => {

  const {currentUser} = useContext(AuthContext);
  useEffect(() => {
    // console.log(currentUser);
  }, [currentUser])
  
  const {isLoading, blogList} = useFetch();
  // console.log(blogList);

  return (
    <div>
      <div className="dashboard">
<span className="dashboardLine">──────────</span> 
        <Typography
          variant="h2"
          margin="0 10px"
          textAlign="center"
          color="primary"
          display="inline-block"
          fontFamily="Girassol"
        >
          DashboarD 
        </Typography>
<span className="dashboardLine">──────────</span>
      </div>
      <Grid container spacing={1}
      justifyContent='center'
      alignItems='center'
      >
      {isLoading? (<h1>Loading</h1>)
    : (
      blogList.map((item,index)=> (
        <Grid container item xs={12} sm={12} md={6} lg={4} xl={3} justifyContent='center'>
         <BlogCard item={item} key = {index}/>
        </Grid>
      ))
    )  
    
    
    }

      </Grid>

      
    </div>
  );
};

export default Dashboard;
