import { Row, Col, Form, Input, Button } from 'antd';
import './forgot-pwd.scss';
import Navbar from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
    const [form] = Form.useForm();

    const onSubmit = () => {        
        form.validateFields().then((values) => {
            form.resetFields();
            console.log(values);
        }).catch(err => console.log(err));
    };

    return (
        <>
            <Navbar />
            <Row style={{ padding: '30px 60px 50px' }}>
                <Col className="forgot" xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 6, offset: 9 }}>
                    <p className="title-heading">Forgot your password?</p>
                    <p className="sub-text">Enter your email address you're using on your account, and we will send you a password reset link.</p>
                    <Form form={form} layout="vertical" name="forgotForm">
                        <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
                            <Input type="text" placeholder="Email" className="input" />
                        </Form.Item>
                    </Form>
                    <Button type="primary" size="large" onClick={() => onSubmit()} className="submit-btn">Submit</Button>
                    <p style={{ marginTop: '8px' }}>
                        <Link to="/">
                            <Button type="link" className="cancel-btn">Cancel</Button>
                        </Link>
                    </p>
                </Col>
            </Row>
            <Footer/>
        </>
    )
}