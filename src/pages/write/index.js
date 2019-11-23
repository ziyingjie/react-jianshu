import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
	render() {
		const { logStatus } = this.props;
		if (logStatus) {
			return (
				<div>写文章页面</div>
			)
		}else {
			return <Redirect to='/login'/>
		}
	}
}

const mapState = (state) => ({
	logStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write);