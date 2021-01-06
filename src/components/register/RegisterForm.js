import React from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './register.scss';

const RegisterForm = ({ visible, onCancel, onCreate }) => {
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
            okText="Sign Up"
            onCancel={onCancel}
            cancelButtonProps={{ style: { display: 'none' } }}
            className="register-modal"
            footer={[
                <Button key="submit" type="primary" onClick={() => onSubmit()}>
                    Sign Up
                </Button>,
                <p key="login" className="login-text">Already have an account? <span style={{ color: '#1d84c9', textDecoration: 'underline' }} >Sign In</span></p>,
            ]}
        >
            <p className="title">LMIS</p>
            <Form form={form} layout="vertical" name="registerForm" className="register-form">
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Form.Item name="firstname" rules={[{ required: true, message: 'Please enter first name' }]}>
                        <Input type="text" placeholder="First name" className="input" />
                    </Form.Item>
                    <Form.Item name="lastname" rules={[{ required: true, message: 'Please enter last name' }]}>
                        <Input type="text" placeholder="Last name" className="input" />
                    </Form.Item>
                </div>
                <Form.Item name="organization" rules={[{ required: true, message: 'Please enter organization' }]}>
                    <Input type="text" placeholder="Organization" className="input" />
                </Form.Item>
                <Form.Item name="username" rules={[{ required: true, message: 'Please enter a username' }]}>
                    <Input type="text" placeholder="Username" className="input" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: 'Please enter email' }]}>
                    <Input type="email" placeholder="Email" className="input" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: 'Please enter a password' }]}>
                    <Input.Password placeholder="Password" className="input" iconRender={show => (show ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                </Form.Item>
                <Form.Item name="confirmpassword" rules={[{ required: true, message: 'Please re-enter password' }]}>
                    <Input.Password placeholder="Confirm Password" className="input" iconRender={show => (show ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                </Form.Item>
                <Form.Item name="terms" valuePropName="checked">
                    <Checkbox><strong>I agree with terms and conditions</strong></Checkbox>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default RegisterForm;
