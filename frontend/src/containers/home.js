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
  notification,
} from 'antd';

import Main from '../components/main';

const baseUrl = process.env.REACT_APP_API_BASE_URL;


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

/**
 * The callback function when the form us submitted
 * Put outside the component for possible reuse, although
 * it can be in a helpers folder
 * @param {object} values The form values when submited
 */
export const onFinish = (values) => {
  fetch(`${baseUrl}/ngram`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(values),
  })
  notification.success({
    message: `Ngram submitted successfully`,
    placement: 'bottomLeft'
  });
};

/**
 * The callback function when the form errs
 * @param {object} errorInfo
 */
export const onFinishFailed = (errorInfo) => {
  notification.error({
    message: `Ooops, You have some errors in your form`,
    placement: 'bottomLeft'
  });
};

/**
 * The home component that houses the form and UI that created the ngram
 * @returns
 */
const Home = () => {
  const [form] = Form.useForm();
  return (
    <Main>
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
    </Main>
  )
}

export default Home;