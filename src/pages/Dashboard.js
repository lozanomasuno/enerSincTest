import React from 'react'
import { Grid } from '@material-ui/core';

export const Dashboard = () => {
  return (
    <>
      <div>
          <Grid container spacing={3}>
              <Grid item  xs={12}>

              </Grid>
              <Grid item  xs={12} sm={4} md={4} lg={4} xl={4}>
                <div className='dashboard-card pink'>
                    <p> 10 </p>   
                    <label>Total User loaded</label>   
                </div>
              </Grid>
              <Grid  item  xs={12} sm={4} md={4} lg={4} xl={4}>
                <div className='dashboard-card red'>
                    <p> 20 </p>   
                    <label>Total pending for approved</label>   
                </div>
              </Grid>
              <Grid  item  xs={12} sm={4} md={4} lg={4} xl={4}>
                <div className='dashboard-card gray'>
                    <p>30 </p>   
                    <label>Total Hired</label>   
                </div>
              </Grid>
          </Grid>          
      </div>
    </>
  )
}
