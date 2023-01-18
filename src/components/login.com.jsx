import { Form, Input, Button } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectCurrentUser, selectIsUserFetching } from '../store/auth/auth.selector';
import { loginUser } from '../store/auth/auth.slice';

function LoginComponent() {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const loading = useSelector(selectIsUserFetching);
  const navigate = useNavigate();
  const location = useLocation();

  const onFinish = (values) => {
    dispatch(
      loginUser({
        email: values.email,
        password: values.password,
      })
    );
  };

  const onFinishFailed = (errorInfo) => {
  };

  useEffect(() => {
    const from = location.state?.from || "/";
    if (user) navigate(from, { replace: true });
  }, [user, navigate, location]);

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button loading={loading} type="primary" htmlType="submit">
          Log In
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginComponent;
