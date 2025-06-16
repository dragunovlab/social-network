import MyPosts from '../../MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {

  return (
    <div>
      <div>
        <img src="./src/assets/banner.webp" alt="" width={'1200px'} />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;