import React from "react";

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

// ========================================================================================================

const Layout = ({ children }) => {
  const selectIsAdmin = useSelector((state: IAppState) => state.ui.isAdmin);

  return (
    <>
      {selectIsAdmin ? (
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
