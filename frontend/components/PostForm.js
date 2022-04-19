import { Input, Form, Button } from "antd";

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

export default function PostForm() {
    return (
        <Form encType="multipart/form-data" style={{ marginBottom: 30 }}>
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
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>

        </Form>
    );
};