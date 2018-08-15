import React from 'react';

const Profile = ({user, onSignOut})=> {
  // This is a dumb "stateless" component
  return (
    <div className=" animated zoomIn">
      Welcome <strong>{user.username}</strong>!
      <a id="signout" href="javascript:;" onClick={onSignOut}>Sign out</a>
    </div>
  )
}

export default Profile;
