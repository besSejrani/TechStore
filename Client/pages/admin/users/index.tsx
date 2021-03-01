import React from "react";

import {Box, Breadcrumbs, Link, Button} from "@material-ui/core"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles"
import { DataGrid, GridColDef, ValueGetterParams } from '@material-ui/data-grid';

// ========================================================================================================

const index = () => {

  const classes = useStyles()

  const columns = [
    { field: 'username', headerName: 'Username',  flex:1},
    { field: 'role', headerName: 'Role', flex:0.5},
    { field: 'confirmed', headerName: 'Confirmed',flex:.5 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex:0.5
    },
  ];
  
  const rows = [
    { id: 1, username: 'Snow', role: 'admin', confirmed: true ,actions:"delete update"},
    { id: 2, username: 'Lannister', role: 'admin', confirmed: true ,actions:"delete update" },
    { id: 3, username: 'Lannister', role: 'user', confirmed: true ,actions:"delete update" },
    { id: 4, username: 'Stark', role: 'user', confirmed: true ,actions:"delete update" },
    { id: 5, username: 'Targaryen', role: 'user', confirmed: true ,actions:"delete update" },
    { id: 6, username: 'Melisandre', role: "user", confirmed: true ,actions:"delete update" },
    { id: 7, username: 'Clifford', role: 'user', confirmed: true ,actions:"delete update" },
    { id: 8, username: 'Frances', role: 'user', confirmed: false ,actions:"delete update" },
    { id: 9, username: 'Roxie', role: 'user', confirmed: false ,actions:"delete update" },
    { id: 10, username: 'Roxie2', role: 'user', confirmed: false ,actions:"delete update" },
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
    Users
  </Link>
</Breadcrumbs>
    </Box>
    <div style={{ width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection autoHeight disableColumnSelector />
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