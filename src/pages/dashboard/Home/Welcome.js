import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

function DashboardWelcome() {
  return(
    <div className="container-welcome">
      <Row>
        <Col span={24} style={{borderRadius: '10px'}}>
          <Row gutter={[8, 8]}>
            <Col span={12}>
              <h1 strong>Hello John Doe</h1>
              <h1>Welcome to LMIS dashboard</h1>
            </Col>
            <Col span={12}>
              <div className="welcomeButton">
                <Button type="primary" style={{ background: "#ffb229", borderColor: "#ffb229", borderRadius: "6px" }}>
                  <Link to="/admin/upload">Upload data</Link>
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>  
  );
}

export default DashboardWelcome;