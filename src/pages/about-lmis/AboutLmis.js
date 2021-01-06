import Navbar from '../../components/navbar/Navbar';
import { Row, Col } from 'antd';
import illustration from '../../assets/about-lmis.svg';
import './about-lmis.scss';
import { Footer } from '../../components/footer/Footer';

export const AboutLmis = () => {
    return (
        <>
            <Navbar/>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ padding: '30px 60px 50px' }}>
                <Col className="gutter-row" span={8}>
                    <img src={illustration} alt="Illustration" style={{ width:'90%', height: 'auto' }} />
                </Col>
                <Col className="gutter-row" span={8} offset={1}>
                    <p className="title-heading">Overview</p>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="title-heading">Mission</p>
                    <p className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    <p className="title-heading">Vision</p>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="title-heading">Contact Address</p>
                    <p className="text">Phone: 1415 or +25072777510</p>
                    <p className="text">Email: info@rdb.rw</p>
                </Col>
            </Row>
            <Footer/>
        </>
    )
}