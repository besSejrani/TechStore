import React,{useEffect} from "react";

// Public Layout
import Header from "./Header";
import Footer from "./Footer";
import SideDrawerNavigation from "./SideDrawerNavigation";
import SideDrawerCart from "./SideDrawerCart";

// Admin Layout
import AdminSideBar from "./admin/adminSideBar";
import AdminHeader from "./admin/adminHeader";

// Theme
import { withTheme } from "./Theme";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useSelector } from "react-redux";

// Apollo
import {useQuery} from "@apollo/client"

// Apollo State
import {getUI, GET_UI} from "../Apollo/state/ui"

// ========================================================================================================

const Layout = ({ children }) => {
  const selectIsAdmin = useSelector((state: IAppState) => state.ui.isAdmin);
  const selectIsAdmin2 = getUI().isAdmin;
  console.log("select", selectIsAdmin2)

  const {data} = useQuery(GET_UI)

  console.log("ui", data)

  useEffect(() => {
    getUI({isAdmin:true, cartOpen:true, isUser:false, sidebarOpen:false});
  }, [data]);
  
  
  return (
    <>
      {selectIsAdmin2 ? (
        <>
          <AdminHeader />
          <div style={{ margin: "120px 20px 0px 260px " }}>{children}</div>
          <AdminSideBar />
        </>
      ) : (
        <>
          <Header />

          <SideDrawerNavigation />
          <SideDrawerCart />
          {children}

          <Footer />
        </>
      )}
    </>
  );
};

export default withTheme(Layout);

// =================================================================
