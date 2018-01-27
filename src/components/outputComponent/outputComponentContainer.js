import { connect } from 'react-redux'
import SecondComponent from './outputComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    someUserName: state.main.name,
    someUserEmail: state.main.email,
    someUserPhone: state.main.phone,
    someUserAddress: state.main.address,
    someUserPostcode: state.main.postcode,
    dateOfBirth: state.main.dateOfBirth,
    show: state.main.show,
  }
}

export default connect(mapStateToProps)(SecondComponent)
