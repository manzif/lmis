import React from 'react';
import { Data } from './Data';
import { Button } from 'antd';
import './noaccess.scss';

function DashboardNoAccess() {
  return(
    <div>
        <Data />
        <div className="noAccess">
          <i className="fa fa-ban fa-3x noaccessIcon" aria-hidden="true"></i>
          <p className="noaccessTitle">You are not allowed to access the information on this page</p>
          <Button style={{ backgroundColor: "#ffffff", borderColor: "#1d84c9", borderRadius: "15px", color: "#1d84c9" }}>Request Access</Button>
        </div>  
    </div>
  );
}

export default DashboardNoAccess;