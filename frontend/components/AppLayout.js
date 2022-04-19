import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import UserProfile from '../components/UserProfile';

const { Search } = Input;
const dummy = {
    nickname: '묘식',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
}

export default function AppLayout({children}) {
    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
            </Menu>
            <Row style={{ padding: '20px'}}>
                <Col xs={24} md={6}>
                    {dummy.isLoggedIn 
                    ? <UserProfile />
                    : <LoginForm/>}
                </Col>
                <Col xs={24} md={12} style={{ padding: '20px'}}>
                    {children}
                </Col>
                <Col xs={24} md={6}>

                </Col>
            </Row>
            {/* <div style={{ padding: '20px'}}>
                {children}
            </div> */}
        </>
    )
}

AppLayout.PropTypes = {
    children: PropTypes.node,
}