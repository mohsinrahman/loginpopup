import React, { Component } from 'react';


class LoginForm extends React.Component {

  // Using a class based component here because we're accessing DOM refs

  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    this.props.onSignIn(username, password)
  }

  render() {
    return (
      <section className=" animated pulse">
      <h1 > Login to Edit your profile!</h1>
      <form onSubmit={this.handleSignIn.bind(this)} >
        <input type="text" id="email" ref="username" type="email" placeholder="Email" /> <br />
         <input type="password" id="password" ref="password" type="password" placeholder="********"/><br />
        <input className="submit" type="submit" value="Login" />
      </form>
      </section>
    )
  }

}


export default LoginForm;
