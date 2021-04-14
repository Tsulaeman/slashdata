import React from 'react';
import 'dotenv/config';
import {
  Form,
  Input,
  Button,
  InputNumber,
  Switch,
  Row,
  Col,
} from 'antd';

const baseUrl = process.env.REACT_APP_API_BASE_URL;


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = (values) => {
  fetch(`${baseUrl}/ngram`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(values),
  })
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Home = () => {
  const [form] = Form.useForm();
  console.log(baseUrl);
  return (
    <Row justify="space-around" align="middle">
      <Col span={20}>
        <Form
          form={form}
          { ...layout }
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            length: 100,
            ngram: 1,
            isCaseSensitive: false
          }}
        >
          <Form.Item
            label="Body"
            name="body"
            rules={[
              {
                required: true,
                message: 'This field is required'
              }
            ]}
          >
            <Input placeholder="Enter the body here" />
          </Form.Item>
          <Form.Item label="Case Sensitive" valuePropName="checked" name="isCaseSensitive">
            <Switch />
          </Form.Item>
          <Form.Item label="Sequence length" name="ngram">
            <InputNumber />
          </Form.Item>
          <Form.Item label="length" name="length">
            <InputNumber />
          </Form.Item>
          <Form.Item { ...tailLayout }>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default Home;