import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="avatar" />
            post 1
            <div>
                <span>like</span>
            </div>

        </div>
    )
}

export default Post