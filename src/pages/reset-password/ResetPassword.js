import { Row, Col, Form, Input, Button } from 'antd';
import './reset-pwd.scss';
import Navbar from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export const ResetPassword = () => {
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
                <Col className="reset" xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 6, offset: 9 }}>
                    <p className="title-heading">Reset your password</p>
                    <p className="sub-text">Enter your new password</p>
                    <Form form={form} layout="vertical" name="forgotForm">
                        <Form.Item name="newpassword" rules={[{ required: true, message: 'Please enter a new password' }]}>
                            <Input.Password placeholder="New Password" className="input" iconRender={show => (show ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                        </Form.Item>
                        <Form.Item name="confirmpassword" rules={[{ required: true, message: 'Please re-enter password' }]}>
                            <Input.Password placeholder="Confirm Password" className="input" iconRender={show => (show ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
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