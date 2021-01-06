import React from 'react';
import Navbar from '../../components/navbar/Navbar';

import { Row, Col, Table } from 'antd';
import { Footer } from '../../components/footer/Footer';
import './resources.scss';
import { books } from './books';
import { Link } from 'react-router-dom';
import bookSketch from '../../assets/book.svg';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { getColumns } from '../../components/columns/Columns';
class Resources extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.fetchResources());
    }

    render() {
        let resources = [];
        const { fetching, resources:data } = this.props.resources;

        // adding key object to resource object
        if (data.length > 0) {
            resources = data.map((elt) => {
                const res = Object.assign({}, elt);
                res.key = elt.id;
                return res;
            });
        }

        return (
            <>
                <Navbar />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: '30px 60px 50px' }}>
                    <Col className="gutter-row" span={16}>
                        <div className="resource-heading">
                            <h4>Resources</h4>
                            <p style={{ marginTop: '50px' }} >We provide online resources and personalized technical advice to support ILO member States with the implementation of international statistical standards, data production, analysis and dissemination. Click on a resource below to find out more.</p>
                        </div>
                    </Col>
                    <Col>
                        <img src={bookSketch} alt="Book illustration" style={{ zIndex: 2, position: 'absolute' }} />
                    </Col>
                </Row>
    
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="resources-container">
                    <Col className="gutter-row" span={24}>
                        <h4>Latest Resources</h4>
                        <div className="books-container"> 
                        { books.length > 0 && books.map((book, index) => (
                            <div className="book-card" key={index}>
                                <img src={book.image} alt={book.title} />
                                <Link to={`/resource/${book.isbn13}`}>
                                    <h3 className="title">{book.title}</h3>
                                </Link>
                            </div>
                        ))}   
                        </div>
                    </Col>
                </Row>
    
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={24} style={{ padding: '30px 60px'}}>
                        <h4>All Resources</h4>
                        <Table columns={getColumns('home')} dataSource={resources} loading={fetching} />
                    </Col>
                </Row>
    
                <Footer />
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        resources: state.resources
    }
}

export default connect(mapStateToProps)(Resources);