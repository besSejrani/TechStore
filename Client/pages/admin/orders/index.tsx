import React from "react";

import {Box, Breadcrumbs, Link, Button} from "@material-ui/core"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles"
import { DataGrid, GridColDef, ValueGetterParams } from '@material-ui/data-grid';

// ========================================================================================================

const index = () => {

  const classes = useStyles()

  const columns = [
    { field: 'number', headerName: 'Number',  flex:1},
    { field: 'customer', headerName: 'Customer', flex:0.5},
    { field: 'method', headerName: 'Method',flex:.5 },
    {
      field: 'total',
      headerName: 'Total',
      flex:0.5
    },
    {
      field: 'status',
      headerName: 'Status',
      flex:0.5
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex:0.5
    },
  ];
  
  const rows = [
    { id: 1, number: 'Compute Module 3+', customer: 10, method: false, total: false, status:56 ,actions:"delete update"},
    { id: 2, number: 'Compute Module 4', customer: 20, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 3, number: 'Compute Module 4 IO Board', customer: 30, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 4, number: 'Raspberry Pi 3 Model A+', customer: 15, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 5, number: 'Raspberry Pi 4 Model B', customer: 45, method: true, total: false, status:56  ,actions:"delete update" },
    { id: 6, number: 'PI NoIR Camera V2', customer: 55, method: true, total: false, status:56 ,actions:"delete update" },
    { id: 7, number: 'Raspberry Pi Zero W', customer: 90, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 8, number: 'Raspberry Pi PoE Hat', customer: 120, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 9, number: 'Raspberry Pi Touch Display', customer: 55, method: true , total: false, status:56,actions:"delete update" },
    { id: 10, number: 'Compute Module 3+', customer: 10, method: false, total: false, status:56 ,actions:"delete update"},
    { id: 11, number: 'Compute Module 4', customer: 20, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 12, number: 'Compute Module 4 IO Board', customer: 30, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 13, number: 'Raspberry Pi 3 Model A+', customer: 15, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 14, number: 'Raspberry Pi 4 Model B', customer: 45, method: true , total: false, status:56 ,actions:"delete update" },
    { id: 15, number: 'PI NoIR Camera V2', customer: 55, method: true, total: false, status:56  ,actions:"delete update" },
    { id: 16, number: 'Raspberry Pi Zero W', customer: 90, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 17, number: 'Raspberry Pi PoE Hat', customer: 120, method: false, total: false, status:56 ,actions:"delete update" },
    { id: 18, number: 'Raspberry Pi Touch Display', customer: 55, method: true, total: false, status:56  ,actions:"delete update" },
    { id: 19, number: 'Compute Module 3+', customer: 10, method: false, total: false, status:56 ,actions:"delete update"},
    { id: 20, number: 'Compute Module 4', customer: 20, method: false, total: false, status:56 ,actions:"delete update" },
  ];
  

  return <Box className={classes.root}>
    <Box style={{width: "100%"}}>

<Box className={classes.header}>

    <Breadcrumbs aria-label="breadcrumb">
  <Link color="inherit" href="/">
    Dashboard
  </Link>
  <Link color="inherit" href="/getting-started/installation/">
    Management
  </Link>
  <Link
    color="textPrimary"
    href="/components/breadcrumbs/"
    aria-current="page"
    >
    Orders
  </Link>
</Breadcrumbs>

<Button variant='outlined'>Create Orders</Button>
    </Box>

    <div style={{  width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection  autoHeight/>
    </div>
    </Box>
  </Box>;
};

export default index;

// ========================================================================================================

const useStyles = makeStyles((theme:Theme)=>createStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
  },
  header:{
    display:"flex",
    justifyContent:"space-between",
    margin: "0px 0px 50px 0px"
  }
}))