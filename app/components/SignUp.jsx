var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
var actions = require('actions');
import AlertContainer from 'react-alert';
import HelloNavbar from 'HelloNavbar';

export class SignUp extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.alertOptions = {
            offset: 14,
            position: 'top left',
            theme: 'dark',
            time: 5000,
            transition: 'scale'
        }
    }

    showAlert = () => {
        var {message} = this.props.message;
        this.msg.show(message, {
        time: 2000,
        type: 'success',
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var submitData = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
        };
                    
        dispatch(actions.addUser(submitData))
            .then(() => {
                this.showAlert();
        });
    }
    
  render () {
    return (
        <div>
            <HelloNavbar/>
            <div className="col-md-8 col-md-offset-2">
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" className="form-control" ref="firstName" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" className="form-control" ref="lastName" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" ref="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="form-control" ref="password" required/>
                    </div>
                    <button className="btn btn-primary" type="submit">Submit</button>
                        <span className="sign-up-link">
                            Already have an account?
                            <IndexLink className="auth-link" to={"/signin/"}>
                            Login
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
)(SignUp);
