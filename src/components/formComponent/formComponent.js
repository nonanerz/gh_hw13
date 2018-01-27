import React, {Component} from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            someUserName: this.props.someUserName,
            someUserEmail: this.props.someUserEmail,
            someUserPhone: this.props.someUserPhone,
            someUserAddress: this.props.someUserAddress,
            someUserPostcode: this.props.someUserPostcode,
            dateOfBirth: this.props.dateOfBirth,
            errors: {}
        }

        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.changePostcode = this.changePostcode.bind(this)
        this.changeDateOfBirth = this.changeDateOfBirth.bind(this)
        this.validateEmail = this.validateEmail.bind(this)
        this.save = this.save.bind(this)
    }

    componentWillMount() {
        this.props.changeStateProps('show', false)
    }

    changeName({target: {value}}) {
        this.props.changeStateProps('show', false)
        this.setState({
            someUserName: value,
        })
    }

    changeEmail({target: {value}}) {
        this.props.changeStateProps('show', false)
        this.setState({
            someUserEmail: value,
        })
    }

    changePhone({target: {value}}) {
        this.props.changeStateProps('show', false)
        this.setState({
            someUserPhone: value,
        })
    }

    changeAddress({target: {value}}) {
        this.props.changeStateProps('show', false)
        this.setState({
            someUserAddress: value,
        })
    }

    changePostcode({target: {value}}) {
        this.props.changeStateProps('show', false)
        this.setState({
            someUserPostcode: value,
        })
    }

    changeDateOfBirth(dateOfBirth) {
        this.props.changeStateProps('show', false)
        this.setState({
            dateOfBirth: dateOfBirth.toString(),
        })
    }

    validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    save() {
        let errors = {}
        let isValid = true
        if (this.state.someUserName.length === 0) {
            errors['nameError'] = 'This field should not be blank.'
        }
        if (this.state.someUserEmail.length === 0) {
            errors['emailError'] = 'This field should not be blank.'

        } else if (!this.validateEmail(this.state.someUserEmail)) {
            errors['emailError'] = 'Please choose a valid email.'

        }
        if (this.state.someUserPhone) {
            if (this.state.someUserPhone.length < 8 || !this.state.someUserPhone.match(/\d/g)) {
                errors['phoneError'] = 'Please provide a valid phone number.'
            }
        }
        if (this.state.someUserAddress) {
            if (this.state.someUserAddress.length < 8 || !this.state.someUserAddress.length > 100) {
                errors['addressError'] = 'Min 8 characters, max 100'
            }
        }

        if (!this.state.someUserPostcode) {
            errors['postcodeError'] = 'This field should not be blank.'
        } else if (this.state.someUserPostcode.length < 2 || !this.state.someUserPostcode.length > 10) {
            errors['postcodeError'] = 'Min 2 characters, max 10'
        }

        if (!this.state.dateOfBirth && !this.state.dateOfBirth) {
            errors['dateOfBirthError'] = 'This field should not be blank.'
        }
        this.setState({errors})

        this.props.changeStateProps('dateOfBirth', this.state.dateOfBirth)
        this.props.changeStateProps('postcode', this.state.someUserPostcode)
        this.props.changeStateProps('address', this.state.someUserAddress)
        this.props.changeStateProps('phone', this.state.someUserPhone)
        this.props.changeStateProps('email', this.state.someUserEmail)
        this.props.changeStateProps('name', this.state.someUserName)
        this.props.changeStateProps('show', true)
        this.setState({
            someUserName: '',
            someUserEmail: '',
            someUserPhone: '',
            someUserAddress: '',
            someUserPostcode: '',
            dateOfBirth: null,
        })
    }

    render() {
        return (
            <div>
                <div className="form-row">
                    <div className="col-md-6 mb-">
                        <label htmlFor="name">Name:</label>
                        <input id="name" className="form-control is-invalid" ref={elem => this.name = elem} placeholder="name"
                               type='text' onChange={this.changeName} value={this.state.someUserName}/>
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

                            <input id="email" className="form-control is-invalid" placeholder="email" type='text'
                                   onChange={this.changeEmail} value={this.state.someUserEmail}/>
                            <div className="invalid-feedback">
                                {this.state.errors.emailError}
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="phone">Phone:</label>
                        <input id="phone" placeholder="phone" type='text' onChange={this.changePhone}
                               value={this.state.someUserPhone} className="form-control is-invalid"/>

                        <div className="invalid-feedback">
                            {this.state.errors.phoneError}
                        </div>
                    </div>


                    <div className="col-md-3 mb-3">
                        <label htmlFor="address">Address:</label>
                        <input id="address" className="form-control is-invalid" placeholder="address" type='text'
                               onChange={this.changeAddress} value={this.state.someUserAddress}/>
                        <div className="invalid-feedback">
                            {this.state.errors.addressError}
                        </div>
                    </div>

                    <div className="col-md-3 mb-3">
                        <label htmlFor="postcode">Postcode:</label>
                        <input id="postcode" className="form-control is-invalid" placeholder="postcode" type='text'
                               onChange={this.changePostcode} value={this.state.someUserPostcode}/>

                        <div className="invalid-feedback">
                            {this.state.errors.postcodeError}
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 is-invalid">
                        <label htmlFor="date">Date of Birth: </label>
                        <DayPickerInput
                            id="date"
                            onDayChange={date => this.changeDateOfBirth(date)}
                        />
                        <div className="text-danger">
                            {this.state.errors.dateOfBirthError ? this.state.errors.dateOfBirthError : ''}
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.save}>Save</button>
            </div>
        )
    }
}
