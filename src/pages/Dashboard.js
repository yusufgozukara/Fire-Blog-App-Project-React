import { Typography } from "@mui/material";
import React from "react";
import BlogCard from "../components/BlogCard";

const Dashboard = () => {
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
      <BlogCard/>
      
    </div>
  );
};

export default Dashboard;
