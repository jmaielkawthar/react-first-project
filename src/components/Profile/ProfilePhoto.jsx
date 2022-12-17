import React from 'react'
import MyProfile from "../../img/profile.jpeg";

const ProfilePhoto = () => {
  return (
    <div>
      <div className='profilePhoto'>
      <img src={MyProfile} alt="logo" />

      </div>

    </div>
  )
}

export default ProfilePhoto