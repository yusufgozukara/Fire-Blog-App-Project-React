import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import { AuthContext } from "../contexts/AuthContext";
import {useFetch} from '../helpers/functions';

const Dashboard = () => {

  const {currentUser} = useContext(AuthContext);
  useEffect(() => {
    console.log(currentUser);
    
  
  }, [currentUser])
  


  const {isLoading, blogList} = useFetch();
  console.log(blogList);
  return (
    <div>
      <div className="dashboard">
        <p className="dashboardLine"></p>
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
        <p className="dashboardLine"></p>
      </div>
      <Grid sx={{display:'flex', flex:'wrap'}}>
      {isLoading? (<h1>Loading</h1>)
    : (
      blogList.map((item,index)=> (
        <BlogCard item={item} key = {index}/>

      ))
    )  
    
    
    }

      </Grid>

      
    </div>
  );
};

export default Dashboard;
