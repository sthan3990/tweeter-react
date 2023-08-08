import React from 'react'; //optional
import profileImage from '../assets/profile-hex.png';

function Profile() {
  return (
    <aside>
      <div className="profile">
        <img src={profileImage} className="profile__image" alt="profile_image"/>;
      </div>
      <br />
        <div className="profile__name">
          <h2><span className="profile--bold">Amy</span> Mansell</h2>
        </div>
    </aside>
  );
}

export default Profile;