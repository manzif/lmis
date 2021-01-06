import React from 'react';
import Navbar from '../../components/navbar/Navbar';

import { Row, Col, Divider, Tag, Button } from 'antd';
import { Footer } from '../../components/footer/Footer';
import './resources.scss';
import { books } from './books';
import { DownloadOutlined } from '@ant-design/icons';

export default class ResourceDetails extends React.Component {
    state = {
        book: {}
    }

    componentDidMount() {
        const { isbn13 } = this.props.match.params;
        const book = books.filter((i) => i.isbn13 === isbn13)[0];

        this.setState({ book });
    }

    render() {
        const { book } = this.state;
        return (
            <>
                <Navbar />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: '30px 60px' }}>
                    <Col className="gutter-row" span={16}>
                        <div className="resource-heading">
                            <h4>Resources</h4>
                        </div>
                    </Col>
                </Row>
    
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="book-wrapper">
                    <Col className="gutter-row" span={6}>
                        <div style={{ textAlign: 'center' }}>
                            <h3>{book.title}</h3>
                            <img src={book.image} alt={book.title} />
                            <p>
                            <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large">
                                Download
                            </Button></p>
                        </div>
                    </Col>

                    <Col className="gutter-row" span={12}>
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was popularised</p>
                            <Divider />

                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <strong>Publisher:</strong>
                                <span style={{ paddingLeft: '10px' }}>Word Bank</span>
                            </div>
                            <Divider />
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <strong>Category:</strong>
                                <span style={{ paddingLeft: '10px' }}>E-book</span>
                            </div>
                            <Divider />
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <strong>Topic:</strong>
                                <span style={{ paddingLeft: '10px' }}>Rwanda Economic Update</span>
                            </div>
                            <Divider />
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <strong>Tags:</strong>
                                <Tag>Business</Tag>
                                <Tag>Labour</Tag>
                                <Tag>Tax and Accounting</Tag>
                            </div>
                        </div>
                    </Col>

                    <div className="left-side">
                        
                    </div>

                    <div className="right-side">
                        
                    </div>
                </Row>
    
                <Footer />
            </>
        )
    }
}