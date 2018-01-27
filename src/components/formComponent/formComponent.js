import React, {Component} from 'react'

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
        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.changePostcode = this.changePostcode.bind(this)
        this.changeDateOfBirth = this.changeDateOfBirth.bind(this)
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

    changeDateOfBirth({target: {value}}) {
        this.props.changeStateProps('show', false)
        this.setState({
            dateOfBirth: value,
        })
    }

    save() {
        let isValid = true
        if (this.state.someUserName.length < 5) {
            console.log(this.name)
            isValid = false
        }
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
            dateOfBirth: '',
        })
    }

    render() {
        return (
            <div>
                <input ref={elem => this.name = elem} placeholder="name" type='text' onChange={this.changeName} value={this.state.someUserName}/>
                <input placeholder="email" type='text' onChange={this.changeEmail} value={this.state.someUserEmail}/>
                <input placeholder="phone" type='text' onChange={this.changePhone} value={this.state.someUserPhone}/>
                <input placeholder="address" type='text' onChange={this.changeAddress}
                       value={this.state.someUserAddress}/>
                <input placeholder="postcode" type='text' onChange={this.changePostcode}
                       value={this.state.someUserPostcode}/>
                <input placeholder="date of birth" type='text' onChange={this.changeDateOfBirth}
                       value={this.state.dateOfBirth}/>
                <button onClick={this.save}>Save</button>
            </div>
        )
    }
}
