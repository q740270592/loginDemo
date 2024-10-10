import './App.css';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate()
  return (
    <div className="box">
      <div className='formData'>
        <h1>注册</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="用户名"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>
          <Form.Item
            name="密码"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
            <Button type="primary"  style={{ margin: '0 16px' }} onClick={() => navigate('/')}>
              返回登录页
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
