import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({	
	getInitialState: function() {
		return {increasing: false}
	},	
	update: function() {
		this.setProps({val: this.props.val+1});
	},	
	componentWillReceiveProps:function(nextProps) {
		this.setState({increasing: nextProps.val > this.props.val})
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		return nextProps.val % 5 === 0;
	},	
	render: function() {
		console.log(this.state.increasing);
		return (
			<button onClick={this.update}>{this.props.val}</button>
		);
	},
	componentDidUpdate: function(prevProps, prevState) {
		console.log('prevProps', prevProps);
	}	

});

export default App

