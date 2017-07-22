var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
var actions = require('actions');
import HelloNavbar from 'HelloNavbar';

export class SignIn extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
                    
        var submitData = {
            email: this.refs.email.value,
            password: this.refs.password.value,
        };
                    
        dispatch(actions.getUser(submitData))
            .then(() => {
                dispatch(actions.getErrorsFromDb());
            })
            .then(() => {
                this.props.history.push("/buglist");
        });        
    }
    
  render () {
    return (
        <div>
            <HelloNavbar/>
            <div className="col-md-8 col-md-offset-2">
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" ref="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" ref="password" required/>
                    </div>
                    <button className="btn btn-primary" type="submit">Login</button>
                    <span className="sign-up-link">
                        Don't have an account?                     
                        <IndexLink className="auth-link" to={"/signup/"}>
                        Sign Up
                        </IndexLink>
                    </span>
                </form>
            </div>
        </div>
      
    )
  }
};

export default connect(
    (state) => {
        return {
            message: state.message
        };
    }
)(SignIn);
