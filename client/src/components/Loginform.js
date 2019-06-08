import React, {Component} from 'react';


class Loginform extends Component {
    constructor(props) {
        super(props); 

        this.state={
            'username': '',
            'password': ''
        }
    }

    render(){
        console.log(this.state);
        return(
            <div>
            <section className="hero is-primary is-fullheight" id="loginform">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" className="box">
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left">
                <input onChange={(e) => this.setState({username:e.target.value})} type="username" placeholder="Username" className="input" required />
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input onChange={(e) => this.setState({password:e.target.value})} type="password" placeholder="*******" className="input" required />
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div className="field">
              <button className="button is-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
            
        )
    }
}

export default Loginform;