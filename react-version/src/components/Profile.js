import React from 'react'; //optional
import profileImage from '../profile-hex.png';

function Profile() {
  return (
    <aside>
      <div class="profile">
        <img src={profileImage} class="profile__image"/>;
      </div>
      <br />
        <div class="profile__name">
          <h2><span class="profile--bold">Amy</span> Mansell</h2>
        </div>
    </aside>
  );
}

export default Profile;