import React from 'react';

import { Row, Col, Card, Button } from 'antd';
import './home.scss';

const items = [
  {
    date: 'August 2020',
    title: 'Labour Face participation rate',
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
    title: 'Employment population',
    number: '13,987,789',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    date: 'December 2020',
    title: 'Long term employment',
    number: '37%',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    date: 'December 2020',
    title: 'Unemployment rate',
    number: '16%',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    date: 'December 2020',
    title: 'Total youth unemployment rate',
    number: '20%',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

function DashboardLabour() {
  return(
    <div>
        <Row gutter={[8, 8]}>
            {items.map(item => {
            return (
            <Col  xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}   lg={{ span: 8 }} xl={{ span: 8 }} xxl={{span: 8 }}>
                <Card className="labour-card">
                    <div className="labour-icon">
                        <span><i className="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                    </div>
                    <Row>
                        <Col span={4}>
                            <span className="circle"><i className="fa fa-users stroke-transparent" aria-hidden="true"></i></span>
                        </Col>
                        <Col span={20}>
                            <span className="title">{ item.title }</span> 
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} push={4}>
                            <span className="number">{ item.number }</span>
                        </Col>
                        <Col span={12}>
                            <div className="percentageClass">
                            <span className="percentage">+0.767765</span>
                            </div>
                        </Col>
                    </Row>
                    <Row gutter={[0, 16]}>
                        <Col span={24} push={4}>
                            <div className="figure-title">
                              <span>Age between 16 and 64 seasonaly adjusted</span>
                              <p>April to August 2020</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} push={1}>
                            <div className="buttonData">
                               <Button size="small">Analysis</Button>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="buttonData">
                               <Button size="small">Data</Button>
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

export default DashboardLabour;