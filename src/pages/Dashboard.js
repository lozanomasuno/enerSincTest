import React from "react";
import { Grid } from "@material-ui/core";
import { DashBoardCard } from "../components/Dashboard/DashBoardCard";
import { useUsers } from "../hooks/useUsers";

export const Dashboard = () => {

  const { users } = useUsers();
  const allMen = [];
  const allWomen = [];

  const totalOfMen = () =>{   
    users.forEach((person) => {
      if (person.gender === 'male'){
        allMen.push(person);
      }
    })
    return allMen.length;
  }

  const totalOfWomen = () =>{   
    users.forEach((person) => {
      if (person.gender === 'female'){
        allWomen.push(person);
      }
    })
    return allWomen.length;
  }
  

  const totalUsers = () =>{     
    return users.length;
  }
  return (
    <>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <DashBoardCard
              className = { 'dashboard-card pink' }
              title = "Mens"
              subtitle = { totalOfMen() }
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            
            <DashBoardCard
              className = { 'dashboard-card red' }
              title = "Woman"
              subtitle = { totalOfWomen() }
            />
            
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
             <DashBoardCard
                className = { 'dashboard-card gray' }
                title = "Total Users"
                subtitle = { totalUsers() }
              />            
          </Grid>
        </Grid>
      </div>
    </>
  );
};
