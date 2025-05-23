import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Alert, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios'; // 需要安装axios: npm install axios

const { Title, Text } = Typography;

const Login = () => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const onFinish = async (values) => {
    setLoading(true);
    setError('');
    
    try {
      // 发送跨域请求到SpringBoot后端
      const response = await axios.post('http://localhost:8081/login', {
        username: values.username,
        password: values.password,
        remember: values.remember
      });
      
      // 如果请求成功，调用login方法并导航到dashboard
      if (response.data && response.status === 200) {
        login(values.username, values.password);
        navigate('/dashboard');
      }
    } catch (err) {
      // 处理错误情况
      setError(err.response?.data?.message || '登录失败，请检查账号和密码');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="auth-container">
      <Card className="auth-card fade-in">
        <div className="welcome-text">
          <Title level={2} className="welcome-title">
            高校师范生数字化教学资源系统
          </Title>
          <Text className="welcome-subtitle">
            欢迎登录，请输入您的账号信息
          </Text>
        </div>
        
        {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 16 }} />}
        
        <Form
          name="login_form"
          className="auth-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名/邮箱/学号!' }]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="用户名/邮箱/学号" 
              size="large" 
            />
          </Form.Item>
          
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="密码"
              size="large"
            />
          </Form.Item>
          
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>
            
            <Link to="/forgot-password" className="auth-form-forgot">
              忘记密码
            </Link>
          </Form.Item>
          
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="auth-form-button"
              size="large"
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
          
          <div className="auth-form-register">
            还没有账号? <Link to="/register">立即注册</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;