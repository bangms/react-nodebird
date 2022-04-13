import { Menu, Input, Button } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

const { Search } = Input;

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
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            {children}
        </>
    )
}

AppLayout.PropTypes = {
    children: PropTypes.node,
}