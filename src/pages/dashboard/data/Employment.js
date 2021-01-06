import React, { useState } from 'react';
import { Data } from './Data';
import { SiderLayout } from './SiderLayout';
import EmplymentChart from './EmploymentChart';
import EmplymentTable from './EmploymentTable';
import { Layout, Menu } from 'antd';

const { Content, Sider } = Layout;

function DataEmployment() {
  const [ chartState , setChartState ] = useState("block");
  const [ tableState , setTableState ] = useState("none");
  const setVisibility = (item) => {
    if(item.key === 'chart') {
      setChartState("block")
      setTableState("none")
    }
    if(item.key === 'table') {
      setChartState("none")
      setTableState("block")
    }
  }

  return(
    <div>
      <Data />
      <Layout>
        <Sider theme="light" width="300">
          <Menu mode="horizontal">
            <Menu.Item key="chart" onClick={setVisibility}>Chart</Menu.Item>
            <Menu.Item key="table" onClick={setVisibility}>Table</Menu.Item>                
          </Menu>
          <SiderLayout />
        </Sider>
        <Layout>
          <Content>
            <div style={{ padding: 24, backgroundColor: "white", display: `${chartState}` }}>
              <EmplymentChart />
            </div>
            <div style={{ padding: 24, backgroundColor: "white", display: `${tableState}` }}>
              <EmplymentTable />
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>  
  );
}

export default DataEmployment;