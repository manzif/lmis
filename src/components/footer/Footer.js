import { Row, Col } from 'antd';
import './footer.scss';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const Footer = () => (
    <div className="main-footer">
        <div className="top">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ paddingLeft: '100px'}}>
                <Col className="gutter-row" span={6} style={{ textAlign: 'center' }}>
                    <h4>Contact Us</h4>
                    <p>Tel: 1415 or + 250727775170</p>
                    <p>Email: info@rdb.rw</p>
                </Col>

                <Col className="gutter-row" span={6} style={{ textAlign: 'center' }}>
                    <h4>External Links</h4>
                    <div className="links">
                        <a href="https://rdb.rw/" target="_blank" rel="noreferrer">RDB</a>
                        <a href="https://www.statistics.gov.rw/" target="_blank" rel="noreferrer">NISR</a>
                        <a href="https://www.kora.rw/jobportal/" target="_blank" rel="noreferrer">Kora Job Portal</a>
                    </div>
                </Col>

                <Col className="gutter-row" span={6} style={{ textAlign: 'center' }}>
                    <h4>Quick Links</h4>
                    <div className="links">
                        <Link to="/labour-market-indicators">Labour Market Indicators</Link>
                        <Link to="/resources">Resources</Link>
                    </div>
                </Col>

                <Col className="gutter-row" span={6} style={{ textAlign: 'center' }}>
                    <h4>Social Media</h4>
                    <div className="icons">
                        <FacebookOutlined className="icon" />
                        <TwitterOutlined className="icon" />
                        <InstagramOutlined className="icon" />
                        <YoutubeOutlined className="icon" />
                        <LinkedinOutlined className="icon" />
                    </div>
                </Col>
            </Row>
        </div>
        <div className="bottom">
            <p className="copyright">2020 &copy; Labour Market Information System</p>
            <ul className="nav">
                <Link to="/">Terms</Link>
                <Link to="/">Privacy</Link>
                <Link to="/">Support</Link>
            </ul>
        </div>
    </div>
);