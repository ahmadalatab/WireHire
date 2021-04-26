import React, {Component} from 'react';

class SignUp extends Component {
    render(){
        return(
            <form>
                <h3>Sign Up</h3>
                <div className="form-group text-left">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First Name"/>
                </div>
                <div className="form-group text-left">
                    <label>Last Name</label>
                    <input type="text" className="form-control" placeholder="Last Name"/>
                </div>
                <div className="form-group text-left">
                    <label>Email Address</label>
                    <input type="text" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group text-left">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password"/>
                </div>
            </form>
        )
    }
}

export default SignUp
