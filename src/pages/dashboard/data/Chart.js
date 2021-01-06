import React from "react";
import Chart from "react-apexcharts";
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';

const { RangePicker } = DatePicker;

export const MyChart = ({series, options}) => {

  return(
    <div className="collumnChart">
        <Row>
            <Col span={4}>
                <div className="collumnChartTitle">
                  <p>Period</p>
                </div>
            </Col>
            <Col span={20}>
                <div className="collumnChartTitle">
                <RangePicker picker="year" separator="-" style={{ width: '150px', borderRadius: '15px'}} />
                </div>
            </Col>
        </Row>
        <div id="row">
            <div className="mixed-chart">
              <Chart
                options={options}
                series={series}
                type="bar"
                height="300"
                width="80%"
              />
          </div>
        </div>
    </div>  
  );
}
