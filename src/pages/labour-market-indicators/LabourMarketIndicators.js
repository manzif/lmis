import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Layout, Menu, Dropdown, Button } from 'antd';
import EmploymentChart from '../dashboard/data/EmploymentChart';
import EmploymentTable from '../dashboard/data/EmploymentTable';
import { SiderLayout } from '../dashboard/data/SiderLayout';
import { DownOutlined } from '@ant-design/icons';
import './labour-market.scss';

const { Content, Sider } = Layout;

export const LabourMarketIndicators = () => {
    const [ chartState , setChartState ] = useState("block");
    const [ tableState , setTableState ] = useState("none");
    const setVisibility = (item) => {
        if (item.key === 'chart') {
            setChartState("block");
            setTableState("none");
        }
        if (item.key === 'table') {
            setChartState("none");
            setTableState("block");
        }
    }

    function handleMenuClick(e) {
        console.log('click', e);
    }
      
    const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
        Population
        </Menu.Item>
        <Menu.Item key="2">
        Employment
        </Menu.Item>
        <Menu.Item key="3">
        Labour Force
        </Menu.Item>
    </Menu>
    );

    return (
        <>
            <Navbar />
            <div style={{ paddingLeft: '40px', paddingTop: '30px' }}>
                <Layout>
                    <Sider theme="light" width="300">
                        <h3 className="compare-text">Compare Statistics</h3>
                        <Menu mode="horizontal">
                            <Menu.Item key="chart" onClick={setVisibility}>Chart</Menu.Item>
                            <Menu.Item key="table" onClick={setVisibility}>Table</Menu.Item>                
                        </Menu>
                        <SiderLayout />
                    </Sider>
                    <Layout>
                        <Content>
                            <div style={{ paddingLeft: 24, backgroundColor: "white" }}>
                                <Dropdown overlay={menu}>
                                    <Button>
                                        Choose category <DownOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                            <div style={{ padding: 24, backgroundColor: "white", display: `${chartState}` }}>
                                <EmploymentChart />
                            </div>
                            <div style={{ padding: 24, backgroundColor: "white", display: `${tableState}` }}>
                                <EmploymentTable />
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </>
    )
}

{/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: '30px 60px 50px' }}>
    <Col className="gutter-row" span={16}>
        <p>Labour market indicators component</p>
    </Col>
</Row> */}