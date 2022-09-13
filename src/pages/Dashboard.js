import React from "react";
import { Grid } from "@material-ui/core";
import { DashBoardCard } from "../components/Dashboard/DashBoardCard";

export const Dashboard = () => {
  const totalUsersLogged = 10; 
  const totalUsershired = 20;
  const totalUsersInProcess = 45;
  return (
    <>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <DashBoardCard
              className = { 'dashboard-card pink' }
              title = "All users Logged"
              subtitle = { totalUsersLogged }
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            
            <DashBoardCard
              className = { 'dashboard-card red' }
              title = "All users Hired"
              subtitle = { totalUsershired }
            />
            
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
             <DashBoardCard
                className = { 'dashboard-card gray' }
                title = "All Users In Process"
                subtitle = { totalUsersInProcess }
              />            
          </Grid>
        </Grid>
      </div>
    </>
  );
};
