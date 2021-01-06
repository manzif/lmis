import React from 'react';

import { Row, Col, Card } from 'antd';
import './home.scss';

const items = [
  {
    date: 'August 2020',
    title: 'Unemployment Rate',
    number: '13,987,789',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    date: 'September 2020',
    title: 'Working age population',
    number: '13,987,789',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    date: 'January 2020',
    title: 'Employment population rate',
    number: '13,987,789',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    date: 'December 2020',
    title: 'Potential labor force',
    number: '13,987,789',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function DashboardFigures() {
  return(
    <div>
        <Row gutter={[8, 8]}>
            {items.map(item => {
            return (
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 6 }} xl={{ span: 6 }} xxl={{span: 6 }}>
                <Card className="figures-card">
                    <Row>
                        <Col span={12} push={5}>
                            <span className="date">{ item.date }</span>
                        </Col>
                        <Col span={12} push={12}>
                            <span className="icon"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                        </Col>
                    </Row>
                    <Row gutter={[0, 16]}>
                        <Col span={4}>
                            <span className="circle"><i className="fa fa-users stroke-transparent" aria-hidden="true"></i></span>
                        </Col>
                        <Col span={20} push={1}>
                            <span className="title">{ item.title }</span> 
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} push={5}>
                            <span className="number">{ item.number }</span>
                        </Col>
                        <Col span={12}>
                            <div className="percentageClass">
                            <span className="percentage">+0.767765</span>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
            );
          })}
        </Row>
    </div>  
  );
}

export default DashboardFigures;