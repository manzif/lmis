import React from 'react';

import { Row, Col, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function TitleButton({ item }) {
  return(
    <div className="container-title-button">
      <Row>
        <Col span={24}>
            <Row gutter={[8, 8]}>
                <Col span={12}>
                    <h1 strong>{item.name}</h1>
                </Col>
                <Col span={12}>
                    <div className="buttonClass">
                        <Button>{item.button}<DownloadOutlined className="icon" /></Button>
                    </div>
                </Col>
            </Row>
        </Col>
      </Row>
    </div>  
  );
}

export default TitleButton;