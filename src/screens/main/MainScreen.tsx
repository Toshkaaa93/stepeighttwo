import { Link, Page, Tab, Tabs, Toolbar } from "framework7-react";
import React from "react";
import { FileTab, GeoTab, HomeTab, OrderTab } from "./tabs";

export const MainScreen = () => {
  return (
    <Page>
      <Toolbar outline={false} className="main-tabbar" bottom tabbar>
      <Link tabLink="#tab-1" tabLinkActive>
          <i className="icon home"></i>
        </Link>
        <Link tabLink="#tab-2">
        <i className="icon orders"></i>
        </Link>
        <Link tabLink="#tab-3">
        <i className="icon bonuses"></i>
        </Link>
        <Link tabLink="#tab-4">
        <i className="icon menu"></i>
        </Link>
      </Toolbar>
      <Tabs routable={false}>
        <HomeTab/>
        {/* <Tab id="tab-2" className="page-content">2</Tab> */}
        <OrderTab/>
        {/* <Tab id="tab-3" className="page-content">3</Tab> */}
        <FileTab/>
        {/* <Tab id="tab-4" className="page-content">4</Tab> */}
        <GeoTab/>
      </Tabs>
    </Page>
  );
};
