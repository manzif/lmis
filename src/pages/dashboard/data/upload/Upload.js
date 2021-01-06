import React, { useState } from 'react';
import { Data } from '../Data';
import { Layout, Menu, Button, Row, Col, message , Input, Upload, Form } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import CreateTemplate from './CreateTemplate'
import './upload.scss';

const { Content } = Layout;
const { Dragger } = Upload;

function DataUpload() {

const [ dataState , setDataState ] = useState("block");
const [ templateState , setTemplateState ] = useState("none");
const setVisibility = (item) => {
  if(item.key === 'data') {
    setDataState("block")
    setTemplateState("none")
  }
  if(item.key === 'template') {
    setDataState("none")
    setTemplateState("block")
  }
}
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
  return (
    <div>
      <Data />
      <div className="uploadContainer">
          <Menu mode="horizontal">
            <Menu.Item key="data" onClick={setVisibility}>Upload Data</Menu.Item>
            <Menu.Item key="template" onClick={setVisibility}>Create Template</Menu.Item>
            <Button className="buttonSave" style={{ float:'right' }} type="primary">Save</Button>
            <Button className="buttonCancel" style={{ float:'right' }} type="primary">Cancel</Button>                      
          </Menu>
          <Layout>
            <Layout>
              <Content>
                <div style={{ padding: 24, backgroundColor: "white", display: `${dataState}` }}>
                  <Row>
                    <Col span={10}>
                      <div>
                        <Form name="upload-data" initialValues={{ remember: true }}>
                          <Form.Item label="Title" name="Title">
                            <Input placeholder="Enter the title" />
                          </Form.Item>
                          <Form.Item label="Indicator" name="indicator">
                            <select>
                              <option value="" disabled selected hidden>Choose indicator</option>
                              <option value="Population">Population</option >
                              <option value="Employment">Employment</option >
                              <option value="Labour Force">Labour Force</option >
                            </select>
                          </Form.Item>
                        </Form>
                      </div>
                    </Col>
                    <Col span={14}>
                      <div>
                        <Dragger {...props} className="upload-dragger">
                          <p className="ant-upload-drag-icon">
                            <UploadOutlined />
                          </p>
                          <p className="ant-upload-text">Drag file</p>
                          <p className="ant-upload-hint">
                              or
                          </p>
                          <Button style={{borderRadius: '15px', color: '#1d84c9', backgroundColor: 'white', borderColor: '#1d84c9'}}>Browser</Button>
                        </Dragger>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div style={{ padding: 24, backgroundColor: "white", display: `${templateState}` }}>
                  <CreateTemplate />
                </div>
              </Content>
          </Layout>
        </Layout>
      </div>  
    </div>
  );
}

export default DataUpload;