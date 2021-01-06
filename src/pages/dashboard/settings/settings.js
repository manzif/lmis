import React from 'react';

import { Tabs, Button } from 'antd';
import SettingsUsers from './users';
import UserRoles from './userRoles';
import { usersColumns, usersData, organizationColumns, organizationData } from './data'
import './settings.scss';

const { TabPane } = Tabs;


const operations = <Button style={{ backgroundColor: "#ffffff", borderColor: "#1d84c9", borderRadius: "6px", color: "#1d84c9" }}>Upload</Button>;

function DashboardSettings() {
  return(
    <div className="dashboardSettings">
        <Tabs tabBarExtraContent={operations}>
            <TabPane tab="Users" key="1">
                <SettingsUsers columns={usersColumns} data={usersData}/>
            </TabPane>
            <TabPane tab="Organizations" key="2">
                <SettingsUsers columns={organizationColumns} data={organizationData}/>
            </TabPane>
            <TabPane tab="Users role" key="3">
                <UserRoles />
            </TabPane>
            <TabPane tab="Security" key="4">
                Security
            </TabPane>
      </Tabs>
    </div>  
  );
}

export default DashboardSettings;