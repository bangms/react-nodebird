import { Button, Card, Avatar } from "antd";
import {
    HeartOutlined,
    RetweetOutlined,
    MessageOutlined,
    EllipsisOutlined,
  } from '@ant-design/icons';
import PropTypes from 'prop-types';

export default function PostCard({post}) {
    return (
        // + 날짜 객체를 숫자로 바꾸어주는 형변환 연산자
        <Card
            key={+post.createdAt}
            cover={post.img && <img alt="example" src={post.img} />}
            actions={[
                <RetweetOutlined key="retweet" />,
                <HeartOutlined key="heart" />,
                <MessageOutlined key="message" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
            extra={<Button>팔로우</Button>}
        >
            <Card.Meta 
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.content}
            />    
        </Card>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.object
    }),
};