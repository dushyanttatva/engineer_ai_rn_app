import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import styles from './style';

class PostDetailsScreen extends React.Component {
	constructor() {
		super();
		this.state = {
			screenName: 'Post Details Screen '
		};
	}

	componentDidMount() {
		const {screenName} = this.state;
	}

	render() {
		const {postDetailsData} = this.props;
		return (
			<View style={styles.fullContainer}>
				<View style={styles.container}>
					<View style={styles.horizontalSpace}>
						<Text style={styles.textValue}>{JSON.stringify(postDetailsData)}</Text>
					</View>
				</View>
			</View>
		)
	}
}

// Map State To Props
const mapStateToProps = (state) => {
	return {
		postDetailsData: state.auth.postDetailsData || null,
	};
};

export default connect(mapStateToProps)(PostDetailsScreen);