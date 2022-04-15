import { useCallback } from "react";
import { Button, Form, Input} from 'antd';
import Link from 'next/link';
import { useInput } from '../pages/signup';

export default function LoginForm() {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        console.log({
          id, password,
        });
      }, [id, password]);

    return (
        <>
        <Form
            style={{ padding: '10px' }}
            onFinish={onSubmitForm}
        >
            <Form.Item
                label="Username"
                name="user-id"
                rules={[{ required: true, message: 'Please input your username!' }]}
                value={id}
                onChange={onChangeId}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Password"
                name="user-password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                value={password}
                onChange={onChangePassword}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={false}>
                    로그인
                </Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </Form.Item>
        </Form>
        </>
    )
}
