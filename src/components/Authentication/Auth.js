import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as Actions from '../../redux/actions/index';


import classes from './Auth.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import Spinner from '../UI/Spinner/Spinner';

class Auth extends Component {
    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your e-mail',
                    name: 'email'
                },
                validation: { required: true },
                value: '',
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password',
                    name: 'password'
                },
                validation: { required: true },
                value: '',
                valid: false,
                touched: false
            }
        },
        isSignUp: true
    }
    //#region Input Handler
    validationHandler = (value, rules) => {
        let valid = true;
        if (rules.required) {
            valid = value.length > 0 && valid;
        }
        if (rules.pattern) {
            var regex = new RegExp(rules.pattern);
            valid = regex.test(value) && valid;
        }
        if (rules.min) {
            valid = value.length >= rules.min && valid;
        }
        if (rules.max) {
            valid = value.length <= rules.max && valid;
        }
        return valid;
    }

    inputOnChangeHandler = (e) => {
        const controls = _.clone(this.state.controls);
        controls[e.target.name].value = e.target.value;
        controls[e.target.name].touched = true;
        controls[e.target.name].valid = this.validationHandler(e.target.value, controls[e.target.name].validation);
        this.setState({ controls: controls });
    }
    //#endregion
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.auth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }
    toggleAuthMode = () => {
        this.setState(prev => {
            return { isSignUp: !prev.isSignUp }
        });
    }
    render() {
        let fields = [];
        let disable = false;
        for (let key in this.state.controls) {
            fields.push({
                id: key,
                config: this.state.controls[key]
            });
            disable = this.state.controls[key].valid
        }
        let redirect = null;
        if (this.props.isAuthenticated && !this.props.building) {
            redirect = <Redirect to="/" />
        } else if (this.props.isAuthenticated && this.props.building) {
            redirect = <Redirect to="/check-out" />
        }
        return (
            <div className={classes.container}>
                {redirect}
                <label>{this.props.authData.error}</label>
                {this.props.loading
                    ? <Spinner />
                    : <form onSubmit={this.onSubmitHandler}>
                        {fields.map(control => {
                            return <Input key={control.id}
                                elementType={control.config.elementType}
                                elementConfig={control.config.elementConfig}
                                invalid={!control.config.valid}
                                focused={control.config.touched}
                                inputOnChange={this.inputOnChangeHandler} />
                        })}
                        <Button disabled={!disable} btnType="success">Submit</Button>
                    </form>
                }
                <Button btnType="danger" click={this.toggleAuthMode}>Switch to {this.state.isSignUp ? 'Sign In' : 'Sign Up'}</Button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        authData: state.auth,
        loading: state.auth.loading,
        isAuthenticated: state.auth.token !== null,
        building: state.ingredients.building
    }
}
const mapDispatchToProps = dispatch => {
    return {
        auth: (email, password, isSignUp) => dispatch(Actions.auth(email, password, isSignUp))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
