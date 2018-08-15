import React from 'react';
import Me from './mohsin.jpeg';

const Profile = ({user, onSignOut})=> {
  // This is a dumb "stateless" component
  const name = user.username;
    const nameMatch = name.replace(/@.*$/,"").toUpperCase();
    return (
    <div>
       Welcome! <strong className="email">{user.username}</strong>
      <a className="animated zoomIn" id="signout" href="javascript:;" onClick={onSignOut}> <i className="fas fa-user"></i> Sign out</a>
      <div className="container-fluid profile">
      <div className="row content">
      <div className="col-sm-3 sidenav">
      <div className="col-sm-13 foto">
        <img  className="foto-me animated pulse" src={Me} />
        <ul className="nav nav-pills nav-stacked">
        <li className="active animated fadeInLeft"><a href="#section1">Background</a></li>
        <li className="active animated fadeInRight"><a href="#section1">Hobbies</a></li>
        <li className="active animated fadeInLeft"><a href="#section2">Friends & Family</a></li>
        <li className="active animated fadeInRight"><a href="#section3">Education</a></li>
        <li className="active animated fadeInLeft"><a href="#section3">Photos</a></li>
      </ul>
      </div>
      </div>
      <div className="col-sm-9">
          <h4 className="edit-heading"><small> <i className="fas fa-user-edit"></i> Edit Profile</small></h4>
          <h2>{nameMatch}</h2>
          <h5><span className="glyphicon glyphicon-education"></span> Education </h5>
          <h5><span className="label label-danger">Frontend UI Developer</span> <span className="label label-primary">Javascript Engineer</span></h5>
          <p className="description">Web is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat.</p>
           <p className="description">Web is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    </div>
    </div>// end top most div
  )
}

export default Profile;
