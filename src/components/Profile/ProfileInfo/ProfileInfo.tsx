import s from './ProfileInfo.module.css';

const ProfileInfo = () => {

  return (
    <>
      <div>
        <img src="./src/assets/banner.webp" alt="" width={'1200px'} />
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </>
  )
}

export default ProfileInfo;