import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

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
            {dummy.isLoggedIn && <PostForm />}
            {dummy.mainPosts.map((c)=>{
                return (
                    <PostCard key={c} post={c}/>
                )
            })}
        </div>
    );
};

export default Home;