import React from "react";

import {Box, Breadcrumbs, Link, Button} from "@material-ui/core"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles"
import { DataGrid, GridColDef, ValueGetterParams } from '@material-ui/data-grid';

// ========================================================================================================

const index = () => {

  const classes = useStyles()

  const columns = [
    { field: 'name', headerName: 'Name',  flex:1},
    { field: 'price', headerName: 'Price', flex:0.5},
    { field: 'promotion', headerName: 'Promotion',flex:.5 },
    {
      field: 'stock',
      headerName: 'Stock',
      flex:0.5
    },
  ];
  
  const rows = [
    { id: 1, name: 'Compute Module 3+', price: 10, promotion: false ,stock:"delete update"},
    { id: 2, name: 'Compute Module 4', price: 20, promotion: false ,stock:"delete update" },
    { id: 3, name: 'Compute Module 4 IO Board', price: 30, promotion: false ,stock:"delete update" },
    { id: 4, name: 'Raspberry Pi 3 Model A+', price: 15, promotion: false ,stock:"delete update" },
    { id: 5, name: 'Raspberry Pi 4 Model B', price: 45, promotion: true ,stock:"delete update" },
    { id: 6, name: 'PI NoIR Camera V2', price: 55, promotion: true ,stock:"delete update" },
    { id: 7, name: 'Raspberry Pi Zero W', price: 90, promotion: false ,stock:"delete update" },
    { id: 8, name: 'Raspberry Pi PoE Hat', price: 120, promotion: false ,stock:"delete update" },
    { id: 9, name: 'Raspberry Pi Touch Display', price: 55, promotion: true ,stock:"delete update" },
    { id: 10, name: 'Compute Module 3+', price: 10, promotion: false ,stock:"delete update"},
    { id: 11, name: 'Compute Module 4', price: 20, promotion: false ,stock:"delete update" },
    { id: 12, name: 'Compute Module 4 IO Board', price: 30, promotion: false ,stock:"delete update" },
    { id: 13, name: 'Raspberry Pi 3 Model A+', price: 15, promotion: false ,stock:"delete update" },
    { id: 14, name: 'Raspberry Pi 4 Model B', price: 45, promotion: true ,stock:"delete update" },
    { id: 15, name: 'PI NoIR Camera V2', price: 55, promotion: true ,stock:"delete update" },
    { id: 16, name: 'Raspberry Pi Zero W', price: 90, promotion: false ,stock:"delete update" },
    { id: 17, name: 'Raspberry Pi PoE Hat', price: 120, promotion: false ,stock:"delete update" },
    { id: 18, name: 'Raspberry Pi Touch Display', price: 55, promotion: true ,stock:"delete update" },
    { id: 19, name: 'Compute Module 3+', price: 10, promotion: false ,stock:"delete update"},
    { id: 20, name: 'Compute Module 4', price: 20, promotion: false ,stock:"delete update" },
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
    Products
  </Link>
</Breadcrumbs>

<Button variant='outlined'>Create Product</Button>
    </Box>

    <div style={{ width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection autoHeight />
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