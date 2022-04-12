import { useState, useCallback } from 'react';
import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import { Form, Input, Button, Checkbox } from 'antd';

export default function Signup() {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const useInput = (initValue = null) => {
        const [value, setter] = useState(initValue);
        const handler = useCallback((e) => {
            setter(e.target.value);
        }, []);
        return [value, handler];
    }

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    
    // useCallback을 사용해서 event Listener들을 감싸주기
    // eventListener들이 다 antd 컴포넌트 안에 들어가는데 props로 넘겨주는 함수, 메소드들은 useCallback으로 감싸주어야 함
    // 함수 컴포넌트가 state가 바뀔 때마다 전체가 재 실행되면서 함수들이 새로 생성됨
    // 그 함수를 전달받은 자식 컴포넌트 들은 렌더링을 다시 한다는 뜻 함수도 객체이기 때문에 객체는 새로 생성하게 되면 이전 객체와는 다른 객체가 됨
    // 그럼 의도치 않게 리 렌더링이 발생하기 때문에 useCallback으로 감싸주는 것이 좋음 
    const onFinish = useCallback((values) => {
        e.preventDefault();
        console.log('Received values of form: ', values);
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
    }, [password, passwordCheck, term]);
    // state들도 dependency array에 담아주어야 함

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value); 
    }, [password]);

    const onChangeTerm = useCallback((e) => { 
        setTermError(false);
        setTerm(e.target.checked); 
    }, []);



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