import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import update from 'immutability-helper'
import {EMAIL_REGEX, DIGIT_REGEX} from '../../constants'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: this.props.user,
            errors: {},
            startDate: moment(),
            isValid: true
        }

        this.changeDateOfBirth = this.changeDateOfBirth.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.save = this.save.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }


    changeDateOfBirth(dateOfBirth) {
        this.props.changeStateProps('show', false)
        this.setState({
            user: update(this.state.user, {
                dateOfBirth: {$set: dateOfBirth.toString()}
            }),
            startDate: dateOfBirth
        })
    }

    changeInput ({target: {value, name}}) {
        let errors = {}
        this.setState({
            isValid: true
        })
        if (name === 'someUserName' && (!value || value.length === 0)) {
            errors['nameError'] = 'This field should not be blank.'
            this.setState({
                isValid: false
            })
        }
        if (name === 'someUserEmail' && (!value || value.length === 0)) {
            errors['emailError'] = 'This field should not be blank.'
            this.setState({
                isValid: false
            })
        } else if (name === 'someUserEmail' && !this.validateEmail(value)) {
            errors['emailError'] = 'Please choose a valid email.'
            this.setState({
                isValid: false
            })
        }
        if (name === 'someUserPhone' && value) {
            if (value.length < 8 || !DIGIT_REGEX.test(value)) {
                errors['phoneError'] = 'Please provide a valid phone number.'
                this.setState({
                    isValid: false
                })
            }
        }
        if (name === "someUserAddress") {
            if (value.length < 8 || !value.length > 100) {
                errors['addressError'] = 'Min 8 characters, max 100'
                this.setState({
                    isValid: false
                })
            }
        }

        if (name === 'someUserPostcode' && !value) {
            errors['postcodeError'] = 'This field should not be blank.'
            this.setState({
                isValid: false
            })
        } else if (name === 'someUserPostcode' && (value.length < 2 || !value.length > 10)) {
            errors['postcodeError'] = 'Min 2 characters, max 10'
            this.setState({
                isValid: false
            })
        }

        if (name === 'dateOfBirth' && !value) {
            errors['dateOfBirthError'] = 'This field should not be blank.'
            this.setState({
                isValid: false
            })
        }

        this.setState({
            user: update(this.state.user, {
                [name]: {$set: value}
            })
        })

        this.setState({errors})

    }

    validateEmail(email) {
        return EMAIL_REGEX.test(email);
    }

    save() {
        if (!this.state.isValid) {
            return
        }
        if (this.props.show) {
            this.setState({
                user: this.props.user,
                errors: {}
            }, () => this.props.changeStateProps('show', false))
            return
        }

        this.props.changeStateProps('user', this.state.user)
        this.props.changeStateProps('show', true)

        if (this.state.isValid) {
            this.setState({
                user: {
                    someUserName: '',
                    someUserEmail: '',
                    someUserPhone: '',
                    someUserAddress: '',
                    someUserPostcode: '',
                    dateOfBirth: null,
                }
            })
        }

    }

    render() {
        return (
            <div>
                <div className="form-row">
                    <div className="col-md-6 mb-">
                        <label htmlFor="name">Name:</label>
                        <input id="name" className={`form-control ${this.state.errors.nameError ? "is-invalid" : null}`} ref={elem => this.name = elem} placeholder="name"
                               type='text' onChange={this.changeInput} name='someUserName' value={this.state.user.someUserName}
                               disabled={this.props.show}
                        />
                        <div className="invalid-feedback">
                            {this.state.errors.nameError}
                        </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label htmlFor="email">Email:</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>

                            <input id="email" className={`form-control ${this.state.errors.emailError ? "is-invalid" : null}`} placeholder="email" type='text'
                                   onChange={this.changeInput} value={this.state.user.someUserEmail}
                                   disabled={this.props.show}
                                   name='someUserEmail'
                            />
                            <div className="invalid-feedback">
                                {this.state.errors.emailError}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="phone">Phone:</label>
                        <input id="phone" placeholder="phone" type='text' onChange={this.changeInput}
                               value={this.state.user.someUserPhone} className={`form-control ${this.state.errors.phoneError ? "is-invalid" : null}`}
                               disabled={this.props.show}
                               name='someUserPhone'
                        />

                        <div className="invalid-feedback">
                            {this.state.errors.phoneError}
                        </div>
                    </div>


                    <div className="col-md-3 mb-3">
                        <label htmlFor="address">Address:</label>
                        <input id="address" className={`form-control ${this.state.errors.addressError ? "is-invalid" : null}`} placeholder="address" type='text'
                               onChange={this.changeInput} value={this.state.user.someUserAddress}
                               disabled={this.props.show}
                               name='someUserAddress'
                        />
                        <div className="invalid-feedback">
                            {this.state.errors.addressError}
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <label htmlFor="postcode">Postcode:</label>
                        <input id="postcode" className={`form-control ${this.state.errors.postcodeError ? "is-invalid" : null}`} placeholder="postcode" type='text'
                               onChange={this.changeInput} value={this.state.user.someUserPostcode}
                               disabled={this.props.show}
                               name='someUserPostcode'
                        />

                        <div className="invalid-feedback">
                            {this.state.errors.postcodeError}
                        </div>
                    </div>
                    <div className={`col-md-3 mb-3 ${this.state.errors.dateOfBirthError ? "is-invalid" : null}`}>
                        <label htmlFor="date">Date of Birth: </label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.changeDateOfBirth}
                            disabled={this.props.show}
                        />
                        <div className="text-danger">
                            {this.state.errors.dateOfBirthError ? this.state.errors.dateOfBirthError : ''}
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.save}>{`${this.props.show ? "Edit" : "Save"}`}</button>
            </div>
        )
    }
}
