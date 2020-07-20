import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';

import {postLoginAction, setPostDetailsData} from '../../redux/actions/authActions';
import styles from './style';

let timer = null;
class PostScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			screenName: 'Post Screen ',
			page: 0,
			postList:[]
		};
	}

	componentDidMount() {
		this.getPosts();
		this.timerCall();
	}

	UNSAFE_componentWillReceiveProps(nextProps){
		const {postsItemArray} = this.props;
		const {postList} = this.state;
		let tempList = postList;
		if(postsItemArray !== nextProps.postsItemArray){
			nextProps.postsItemArray.map(item => {
				tempList.push(item);
			});
			this.setState({postList: tempList});
		}		
	}

	timerCall = () => {
		timer = setInterval(() => {
			this.getPosts();
		}, 10000);
	}

	componentWillUnmount(){
		clearInterval(timer);
	}

	postDetailsNavigate = (item) => {
		this.props.setPostDetailsData(item);
		this.props.navigation.navigate('PostDetails');
	}

	getPosts = () => {
		const {page} = this.state;
		const postData = {
			page:page
		};
		this.props.postLoginAction(postData);
		this.setState({page: page+1});
	}

	renderItem = ({item, index}) => {
		return(
			<>
			<TouchableOpacity
				key={"index_"+index}
				style={styles.verticalSpace}
				onPress={() => {this.postDetailsNavigate(item)}}
			>
				<View style={styles.row}>
					<Text style={styles.textlabel}>{'Title: '}</Text>
					<Text style={styles.textValue}>{item.title}</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.textlabel}>{'Url: '}</Text>
					<Text style={styles.textValue}>{item.url}</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.textlabel}>{'Created At: '}</Text>
					<Text style={styles.textValue}>{moment(item.created_at).format('DD MMM, YYYY')}</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.textlabel}>{'Author: '}</Text>
					<Text style={styles.textValue}>{item.author}</Text>
				</View>
			</TouchableOpacity>
			<View style={styles.seperator}></View>
			</>
		)
	}

	renderEmptyComp = () => {
		return(
			<Text style={styles.textStyle}>{'No posts found.'}</Text>
		)
	}

	render() {
		const {postList} = this.state;
		const {postLoader} = this.props;
		return (
			<View style={styles.fullContainer}>
				<View style={styles.container}>
					<View style={styles.horizontalSpace}>
						<FlatList
							scrollEventThrottle={0.5}
							showsVerticalScrollIndicator={false}
							data={postList}
							onEndReachedThreshold={() => {this.getPosts()}}
							renderItem={this.renderItem}
							keyExtractor={(item, index) => item+"_"+index}
							ListEmptyComponent={<Text style={styles.textStyle}>{postLoader ? 'Loading posts..' : 'No posts found.'}</Text>}
						/>
					</View>
				</View>
			</View>
		)
	}
}

// Map State To Props
const mapStateToProps = (state) => {
	return {
		postsItemArray: state.auth.postsItemArray || [],
		postLoader: state.auth.postLoader || false
	};
};
// Action
const actionsCall = { postLoginAction, setPostDetailsData };

export default connect(mapStateToProps, actionsCall)(PostScreen);