import React from 'react';
import { Row, Col, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { MyChart } from './Chart';
import './employmentchart.scss';

function EmploymentChart() {

const options = {
  chart: {
      type: 'bar',
      height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: 'rounded'
    },
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
    show: true,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['2015', '2016', '2017', '2018', '2019'],
  },
  tooltip: {
      y: {
        formatter: function (val) {
        return val
      }
    }
  }
}
const series = [
      {
        name: 'Total',
        data: [44, 55, 57, 56, 61]
      }, 
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87]
      }, 
      {
        name: 'Free Cash Flow',
        data: [39, 41, 36, 26, 45]
      }, 
      {
        name: 'Free Cash Flow',
        data: [35, 41, 43, 50, 55]
      }

]
  return(
    <div className="employmentChart">
        <Row>
            <Col span={12}>
                <div className="employmentChartTitle">
                    <h1>Employment by age group</h1>
                    <p>Data Source EICD3</p>
                </div>
            </Col>
            <Col span={12}>
                <div className="employmentChartButton">
                    <Button>Download<DownloadOutlined className="icon" /></Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
               <MyChart series={series} options={options} />
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <p className="footerText">
                    The population outside the labour force constitutes a large part of the working age population. It includes persons engaged exclusively in activities for producing goods or services such as subsistence production of goods, own use production of services, volunteer production of goods or services and unpaid trainee or apprentice work, who have not carried out any activity for pay or profit during the reference period. It also includes students who are enrolled in schools, persons who currently do not seek for employment opportunities (not job seeker) such as discouraged job seekers. A particular characteristic of countries with large subsistence foodstuff production is the fact that the size of the working age population outside the labour force may be larger than the size of the labour force itself.
                </p>
            </Col>
        </Row>
    </div>  
  );
}

export default EmploymentChart;