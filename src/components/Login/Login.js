import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa, faCcPaypal } from '@fortawesome/free-brands-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Login = () => {
    const classes = useStyles();

    const handleSubmit = () => {

    }

    const handleBlur = () => {

    }

    return (
        <div className="login-container">
            <div className="account">
                <h4>Account</h4>
                <form onSubmit={handleSubmit}>
                    <FontAwesomeIcon icon={faUser} /><input type="text" onBlur={handleBlur} name="name" placeholder="Full Name" />
                    <br />
                    <FontAwesomeIcon icon={faEnvelope} /><input type="text" onBlur={handleBlur} name="email" placeholder="Email Address" required />
                    <br />
                    <FontAwesomeIcon icon={faKey} /><input type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                    <br />
                </form>
            </div>
            <div className="middle-container">
                <div className="birth">
                    <h4>Date of Birth</h4>
                    <input type="text" onBlur={handleBlur} name="date" placeholder="DD" />
                    <input type="text" onBlur={handleBlur} name="month" placeholder="MM" />
                    <input type="text" onBlur={handleBlur} name="year" placeholder="YYYY" />
                </div>
                <div className="gender">
                    <h4>Gender</h4>
                    <Button variant="contained" color="primary">
                        Male
      </Button>
                    <Button variant="contained" >
                        Female
      </Button>
                </div>
            </div>
            <div className="lower-container">
                <h4>Payment Details</h4>
                <div className="first-line">
                    <Button variant="contained" color="primary">
                        <FontAwesomeIcon icon={faCcVisa} /> Credit Card
      </Button>
                    <Button variant="contained" >
                        <FontAwesomeIcon icon={faCcPaypal} />Paypal
      </Button>
                </div>
                <div className="second-line">
                    <FontAwesomeIcon icon={faCreditCard} /><input type="text" onBlur={handleBlur} name="card" placeholder="Card Number" />
                </div>
                <div className="third-line">
                    <FontAwesomeIcon icon={faUser} /><input type="text" onBlur={handleBlur} name="cvc" placeholder="Card CVC" />
                </div>
            </div>
            <h4>Terms and Condition</h4>
            <input type="checkbox" name="terms" id="" />
            <label htmlFor="terms">I accept the terms and condition for signing up to this service, and hereby confirm I have read the Privacy Policy</label>
        </div>
    );
};

export default Login;