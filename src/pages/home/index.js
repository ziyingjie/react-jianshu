import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';


import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	BackTop
} from './style';
import { actionCreators } from './store';

class Home extends Component {
	handleScroll() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<HomeWrapper>
				<HomeLeft>
					<img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
					<Topic />
					<List />
				</HomeLeft>
				<HomeRight>
					<Recommend />
					<Writer />
				</HomeRight>
				{
					this.props.showTop ? <BackTop onClick={this.handleScroll}>顶部</BackTop> : null
				}

			</HomeWrapper>
		)
	}
	componentDidMount() {
		this.props.getHomeDate();
		this.bindEvents()
	}
	componentWillUnmount(){
		window.removeEventListener('scroll', this.props.changeScroll)
	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScroll)
	}
}
const mapState = (state) => ({
	showTop: state.getIn(['home', 'showTop'])
})
const mapDispatch = (dispatch) => ({
	getHomeDate() {
		dispatch(actionCreators.getHomeDate())
	},
	changeScroll() {
		//console.log(document.documentElement.scrollTop);
		if (document.documentElement.scrollTop > 200) {
			dispatch(actionCreators.changeScrollTop(true))
		} else {
			dispatch(actionCreators.changeScrollTop(false))
		}
	}
})

export default connect(mapState, mapDispatch)(Home);
