import React from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './login.scss';
import { Link } from 'react-router-dom';

const LoginForm = ({ visible, onCancel, onCreate }) => {
    const [form] = Form.useForm();

    const onSubmit = () => {        
        form.validateFields().then((values) => {
            form.resetFields();
            onCreate(values);
        }).catch(err => console.log(err));
    };

    return (
        <Modal
            visible={visible}
            okText="Log In"
            onCancel={onCancel}
            cancelButtonProps={{ style: { display: 'none' } }}
            className="login-modal"
            footer={[
                <Button key="submit" type="primary" onClick={() => onSubmit()}>
                    Log In
                </Button>,
                <p key="forgot" className="forgot-text"><Link to="/auth/forgot-password">Forgot Password?</Link></p>,
            ]}
        >
            <p className="title">Login</p>
            <Form form={form} layout="vertical" name="loginForm" className="login-form">
                <Form.Item name="username" rules={[{ required: true, message: 'Please enter a username' }]}>
                    <Input type="text" placeholder="Username" className="input" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please enter a password' }]}>
                    <Input.Password placeholder="Password" className="input" iconRender={show => (show ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default LoginForm;
