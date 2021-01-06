import React from 'react';

import { Table, Card, Button, Row, Col } from 'antd';
import './home.scss';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Topic',
    dataIndex: 'topic',
    key: 'topic',
  },
  {
    title: 'Uploaded By',
    dataIndex: 'uploadedBy',
    key: 'uploadedBy',
  },
  {
    title: 'Uploaded Date',
    dataIndex: 'uploadedDate',
    key: 'uploadedDate',
  },
  {
    title: 'Uploaded By',
    dataIndex: 'uploadedB',
    key: 'uploadedB',
  },
  {
    title: 'Publisher',
    dataIndex: 'publisher',
    key: 'publisher',
  }
];

const data = [
  {
    key: '1',
    name: 'The Economic Geography of Rwanda',
    topic: 'unemployment',
    uploadedBy: 'E-book',
    uploadedDate: '02/16/2020',
    uploadedB: 'NISR',
    publisher: 'World Bank',
  },
  {
    key: '2',
    name: 'The Economic Geography of Rwanda',
    topic: 'unemployment',
    uploadedBy: 'Case-study',
    uploadedDate: '02/16/2020',
    uploadedB: 'NISR',
    publisher: 'World Bank',
  },
  {
    key: '3',
    name: 'The Economic Geography of Rwanda',
    topic: 'unemployment',
    uploadedBy: 'Publication',
    uploadedDate: '02/16/2020',
    uploadedB: 'NISR',
    publisher: 'World Bank',
  },
  {
    key: '4',
    name: 'The Economic Geography of Rwanda',
    topic: 'unemployment',
    uploadedBy: 'Case-study',
    uploadedDate: '02/16/2020',
    uploadedB: 'NISR',
    publisher: 'World Bank',
  },
  {
    key: '5',
    name: 'The Economic Geography of Rwanda',
    topic: 'unemployment',
    uploadedBy: 'Publication',
    uploadedDate: '02/16/2020',
    uploadedB: 'NISR',
    publisher: 'World Bank',
  },
];

function DashboardTable() {
  return(
    <div>
        <Card>
            <div className="tableTitle">
                <Row>
                    <Col span={12}>
                        <p>Publications</p>
                    </Col>
                    <Col span={12}>
                        <div className="tableIcon">
                            <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </Col>
                </Row>
            </div>
            <Table pagination={false} columns={columns}  dataSource={data} />
            <div className="tableFooter">
                <Row>
                    <Col  xs={{ span: 4 }} sm={{ span: 12 }} md={{ span: 12 }}   lg={{ span: 12 }} xl={{ span: 12 }} xxl={{span: 12 }}>
                        <p>1 IN 15 Pages</p>
                    </Col>
                    <Col  xs={{ span: 20 }} sm={{ span: 12 }} md={{ span: 12 }}>
                        <div className="tableFooterButton">
                            <Button type="link" style={{ color: "#eaf0f7", fontWeight: "bold"}}>PREVIOUS ENTRIES</Button><span><Button type="link">NEXT ENTRIES</Button></span>
                        </div>
                    </Col>
                </Row>
            </div>
        </Card>
    </div>  
  );
}

export default DashboardTable;