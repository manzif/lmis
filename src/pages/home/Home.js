import React, { Component } from 'react';
import './home.scss';
import Navbar from '../../components/navbar/Navbar';
// import logo from '../../assets/logo.svg';
import illustration from '../../assets/illustration.svg';
import { StatCard } from '../../components/stat-card/StatCard';

import { Row, Col, Typography, Input, Button } from 'antd';
import { Footer } from '../../components/footer/Footer';
const { Title } = Typography;
const { Search } = Input;

const onSearch = value => console.log(value);

const analytics = [
    {
        number: '13,589,583',
        title: 'Total Population of Rwanda',
        percentage: '0.34%',
        date: 'August 2020'
    },
    {
        number: '10.6%',
        title: 'Unemployment Rate',
        percentage: '0.34%',
        date: 'August 2020'
    },
    {
        number: '518 Rwf',
        title: 'Minimum Wage',
        percentage: '0.34%',
        date: 'August 2020'
    },
    {
        number: '10.6%',
        title: 'Labour Under-Utilization',
        percentage: '0.34%',
        date: 'August 2020'
    },
    {
        number: '10.6%',
        title: 'Unemployment Rate',
        percentage: '0.34%',
        date: 'August 2020'
    },
    {
        number: '518 Rwf',
        title: 'Minimum Wage',
        percentage: '0.34%',
        date: 'August 2020'
    }
];

class Home extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    handleScroll(e) {
        if (e.target.className !== undefined) {
            if (e.target.className.includes('on-scrollbar') === false) {
                e.target.classList.add('on-scrollbar');
            }
        }
    }

    render() {
        return (
            <>
                <Navbar/>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} style={{ padding: '190px 400px 0 190px' }}>
                        <div>
                            <Title level={2} className="top-heading">Data Analysis Tool for Everyone</Title>
                            <p className="sub-text">Find the latest statistics, reports, surveys and data revolution of the labour market in Rwanda</p>
                            <Search placeholder="Search data" onSearch={onSearch} size="large" enterButton />
                        </div>
                    </Col>
                    <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} style={{ paddingLeft: '0', height: '700px'}}>
                        <img src={illustration} alt="Illustration" style={{ maxHeight: '100%' }} />
                    </Col>
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="cards-wrapper">
                    <Col className="gutter-row cards-container" span={24}>
                        { analytics.length > 0 && analytics.map((item, index) => <StatCard item={item} key={index} />)}
                    </Col>
                    <Col className="gutter-row" span={24} style={{ textAlign: 'center', padding: '40px 0' }}>
                        <Button type="primary" size="large">Explore More</Button>
                    </Col>
                </Row>

                <Footer />
            </>
        )
    }
}

export default Home;