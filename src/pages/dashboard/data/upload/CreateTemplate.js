import React, { useState } from 'react';
import { Divider , Row, Col , Input, Form, Button } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import './upload.scss';

const { TextArea } = Input;

function CreateTemplate() {

  const [label1Values, setlabel1Values] = useState([{ value: '' }]);
  function handleAddInput(item) {
    if (item === 'label1Values') {
      setlabel1Values([...label1Values, { value: ''}]);
    }
  }

  function handleRemoveInput(index) {
    const values = [...label1Values];
    if (label1Values.length !==1) {
      values.splice(index, 1);
      setlabel1Values(values);
    }
  }

  return(
      <div>
        <div className="createTemplateContainer">
          <div>
            <Form name="create-templae" initialValues={{ remember: true }}> 
              <Row>
                <Col span={10}>
                  <Form.Item label="Category" name="Category">
                    <select>
                      <option value="" disabled selected hidden>Choose category</option>
                      <option value="Population">Population</option >
                      <option  value="Employment">Employment</option >
                      <option  value="Labour Force">Labour Force</option >
                    </select>
                  </Form.Item>
                </Col>
                <Col span={12}></Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Form.Item label="SubCategory" name="subcategory">
                    <select>
                      <option value="" disabled selected hidden>Choose SubCategory</option>
                      <option value="Population">Population</option >
                      <option  value="Employment">Employment</option >
                      <option  value="Labour Force">Labour Force</option >
                    </select>
                  </Form.Item>
                </Col>
                <Col span={12}></Col>
              </Row>
              <Row>
                <Col span={10}>
                  <Form.Item label="TemplateName" name="Title">
                    <Input placeholder="enter the template name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Description" name="description">
                    <TextArea autoSize="true" />
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col span={10}>
                  <Form.Item label="Label 1" name="label1">
                    <select>
                      <option value="" disabled selected hidden>gender</option>
                      <option value="Population">Population</option >
                      <option  value="Employment">Employment</option >
                      <option  value="Labour Force">Labour Force</option >
                    </select>
                  </Form.Item>
                </Col>
                <Col span={12}></Col>
              </Row>
              <Form.Item label="Values" name="values1"> 
                {label1Values.map((field, index) => (
                  <div key={index}>
                    <Row>
                      <Col span={10}>
                        <Input placeholder="enter the template name" />
                      </Col>
                      <Col span={8}>
                        <Button type="link" onClick={() => handleAddInput('label1Values')}>
                          <PlusCircleOutlined />
                          add label
                        </Button>
                        <Button type="link" onClick={() => handleRemoveInput(index)}>
                          <MinusCircleOutlined />
                          remove label
                        </Button>
                      </Col>
                      <Col span={6}>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
  );
}

export default CreateTemplate;