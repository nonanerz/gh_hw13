import {connect} from 'react-redux'
import {changeStateProps} from '../../actions'
import Form from './formComponent'

const mapStateToProps = (state, ownProps) => {

    return {
        someUserName: state.main.name,
        someUserEmail: state.main.email,
        someUserPhone: state.main.phone,
        someUserAddress: state.main.address,
        someUserPostcode: state.main.postcode,
        dateOfBirth: state.main.dateOfBirth,
        show: state.main.show,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStateProps: (prop, value) => {
            dispatch(changeStateProps(prop, value))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Form)
