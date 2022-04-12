import { useState } from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { Form, Input, Button, Checkbox } from 'antd';

export default function Signup() {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onFinish = (values) => {
        e.preventDefault();
        console.log('Received values of form: ', values);
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
    };
    const onChangeId = (e) => { setId(e.target.value); console.log("onChangeId"); console.log(e.target.value); };
    const onChangeNick = (e) => { setNick(e.target.value); console.log("onChangeNick"); console.log(e.target.value); };
    const onChangePassword = (e) => { setPassword(e.target.value) };
    
    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value); 
    };
    const onChangeTerm = (e) => { 
        setTermError(false);
        setTerm(e.target.checked); 
    };

    return (
        <>
        <Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"/>
        </Head>
        <AppLayout>
            <Form
                name="basic"
                layout="vertical"
                style={{
                    "width":"500px",
                    "margin":"0 auto"
                }}
                onFinish={onFinish}
            >
                <div>
                <Form.Item
                    label="Username"
                    name="user-id"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                    onChange={onChangeId}
                    value={id}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Nickname"
                    name="user-nick"
                    rules={[{ required: true, message: 'Please input your Nickname!' }]}
                    onChange={onChangeNick}
                    value={nick}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="user-password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    onChange={onChangePassword}
                    value={password}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Password Check"
                    name="user-password-chk"
                    rules={[{ required: true, message: 'Please input your password check!' }]}
                    onChange={onChangePasswordCheck}
                    value={passwordCheck}
                >
                    <Input.Password />
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다!</div>}
                </Form.Item>
                <Form.Item 
                    name="user-term" 
                    valuePropName="term" 
                    wrapperCol={{ offset: 8, span: 16 }} 
                    onChange={onChangeTerm}
                    checked={term} 
                >
                    <Checkbox>Agree</Checkbox>
                    {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다!</div>}
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
                </div>
            </Form>
        </AppLayout>
        </>
    )
}