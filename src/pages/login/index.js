import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
	render() {
		if (!this.props.logStatus) {
			return (<LoginWrapper>
				<LoginBox>
					<Input placeholder='账号' ref={(input) => { this.account = input }} />
					<Input placeholder='密码' ref={(input) => { this.password = input }} type='password' />
					<Button onClick={() => { this.props.login(this.account, this.password) }}>登陆</Button>
				</LoginBox>
			</LoginWrapper>)
		} else {
			return <Redirect to='/' />
		}
	}
}
const mapState = (state) => ({
	logStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(account, password) {
		console.log(account.value, password.value);
		dispatch(actionCreators.login(account.value, password.value))
	}
})

export default connect(mapState, mapDispatch)(Login);