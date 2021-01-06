import React from 'react';
import { Row, Col, Button, DatePicker } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import './employmentchart.scss';
import SettingsUsers from '../settings/users';
import { employmentTableColumns, employmentTableData } from '../settings/data'

const { RangePicker } = DatePicker;

function EmploymentTable() {
  return(
    <div className="employmentChart">
        <Row>
            <Col span={12}>
                <div className="employmentChartTitle">
                    <h1>Employment by age group and gender</h1>
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
                <div className="collumnChartTitle">
                  <p>Period: <span><RangePicker picker="year" separator="-" style={{ width: '150px', borderRadius: '15px'}} /></span></p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <SettingsUsers columns={employmentTableColumns} data={employmentTableData}/>
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

export default EmploymentTable;