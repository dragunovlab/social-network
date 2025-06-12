import s from './Profile.module.css';

const Profile = () => {

    return (
        <div className='content'>
        <div>
        <img src="./src/assets/banner.webp" alt="" width={'1200px'} />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts 
          <div>
            New post
          </div>
          <div className={s.posts}>
            <div className={s.item}>
              post 1
            </div>
            <div className={s.item}>
              post 2
            </div>
          </div>
        </div>
      </div>
    )
}

export default Profile;