import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as contextAction from '../../actions/contextAction';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component {
  render() {
    const {context} = this.props;
    return (
      <div className="jumbotron">
        <h1>Mendix Administration</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        {context._type}
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  context: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    context: state.context
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(contextAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
