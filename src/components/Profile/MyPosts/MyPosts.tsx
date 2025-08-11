import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'It\'s my first post', likesCount: 20 },
        { id: 1, message: 'Blabla', likesCount: 11 },
        { id: 2, message: 'Dada', likesCount: 11 }
    ]

    let postsElements = posts.map((p) => {
        return <Post message={p.message} likesCount={p.likesCount} />
    })

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}

export default MyPosts;
