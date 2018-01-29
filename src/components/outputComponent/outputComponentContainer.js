import { connect } from 'react-redux'
import SecondComponent from './outputComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.main.user,
    show: state.main.show,
  }
}

export default connect(mapStateToProps)(SecondComponent)
