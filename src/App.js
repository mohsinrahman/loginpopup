import React, { Component } from 'react';
import './App.css';
import Modal from 'react-modal';
import Particles from "react-particles-js"
import LoginForm from "./Form.js"
import Profile from "./Profile.js"

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    backgroundColor       : '#7c4dff',
    transform             : 'translate(-50%, -50%)'

  }
};

const customStylesBig = {
  content : {
    backgroundColor       : '#7c4dff',
  }
};

class App extends Component {
  constructor(){
    super()

    this.state = {
      isActive: false,
      isSecondActive : false,
      loading: true,
      user: null
    }
  }


componentDidMount() {
  setTimeout(
    function() {
        this.setState({loading: false});
    }
    .bind(this),
    5000
);
Modal.setAppElement('body');
}

  toggleModal = () => {
     this.setState({
       isActive : !this.state.isActive
     })
  }

  secondtoggleModal = () => {
     this.setState({
       isSecondActive : !this.state.isSecondActive
     })
  }
  signIn(username, password) {
  this.setState({
    user: {
      username,
      password,
    }
  })
}
signOut() {
  this.setState({user: null})
}


render() {
  const { loading } = this.state;
  console.log(loading);
  if(loading) {
    return null;
  }
 else{
   return (
     <section><div className="wrapper">
      <p>
      <button className=" animated fadeInUp button initialButton" onClick={this.toggleModal}>Get Ready & Start the App </button>
      </p>
      </div>
      <Particles
        params={{
          particles: {
            //color: {
            //  value: ["#727077", "#E99787", "#A49592"]
            //  },
            shape: {
              type: "star",
              stroke: {
                width: 0,
                color: "#4CAF50"
              },
              polygon: {
                nb_sides: 15
              }
            },
            line_linked: {
              enable: true,
              distance: 250,
              width: 1,
              shadow: {
                enable: true,
                color: "#000000",
                blur: 0
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: false,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 4
              }
            }
          }
        }}
        style={{
              width: '100%'
            }}
    ></Particles>
      <Modal  isOpen={this.state.isActive} style={customStyles}>
      <h1 className=" animated lightSpeedIn welcome-modal"> Welcome to the world of Stars!</h1>
      <button onClick={this.secondtoggleModal} className="button button-modal-1 animated zoomIn">Click here to Login</button>
       </Modal>
       <Modal  isOpen={this.state.isSecondActive} style={customStylesBig}>
       {
          (this.state.user) ?
            <Profile
             user={this.state.user}
             onSignOut={this.signOut.bind(this)}
            />
          :
            <LoginForm
             onSignIn={this.signIn.bind(this)}
            />
        }
        </Modal>
</section>
   );
 }

}


}

export default App;
