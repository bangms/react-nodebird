import { Input, Form, Button, Card, Avatar, Space } from "antd";
import {
    HeartOutlined,
    RetweetOutlined,
    MessageOutlined,
    EllipsisOutlined,
  } from '@ant-design/icons';


const dummy = {
    isLoggedIn : true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: '묘식',
        },
        content: '첫번째 게시글',
        img: '',
    }],
};

const Home = () => {
    return (
        <div>
            {/* 이미지 업로드를 위해서 encType="multipart/form-data" 로 선언 해주기 */}
            {dummy.isLoggedIn && <Form encType="multipart/form-data" style={{ marginBottom: 30 }}>
                <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
                <div>
                    <input type="file" multiple hidden />
                    <Button>이미지 업로드</Button>
                    <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
                </div>
                <div>
                    {dummy.imagePaths.map((v, i) => {
                        return (
                            <div key={v} style={{ display: 'inline-block' }}>
                                <img src={'http://localhost:3000/' + v} style={{ width: '200px' }} alt={v} />
                            </div>
                        )
                    })}
                </div>

            </Form>}
            {dummy.mainPosts.map((c)=>{
                return (
                    // + 날짜 객체를 숫자로 바꾸어주는 형변환 연산자
                    <Card
                        key={+c.createdAt}
                        cover={c.img && <img alt="example" src={c.img} />}
                        actions={[
                            <RetweetOutlined key="retweet" />,
                            <HeartOutlined key="heart" />,
                            <MessageOutlined key="message" />,
                            <EllipsisOutlined key="ellipsis" />,
                        ]}
                        extra={<Button>팔로우</Button>}
                    >
                        <Card.Meta 
                            avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
                            title={c.User.nickname}
                            description={c.content}
                        />    
                    </Card>
                )
            })}
        </div>
    );
};

export default Home;