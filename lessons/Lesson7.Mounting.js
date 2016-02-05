import React from 'react';
import ReactDOM from 'react-dom';

var Button = React.createClass({	
	getInitialState: function() {
		return {val: 0}
	},
	update: function() {
		this.setState({val: this.state.val+1});
	},
	componentWillMount: function() {
		console.log('mounting');
	},	
	render: function() {
		console.log('rendering');
		return (
			<button onClick={this.update}>{this.state.val}</button>
		);
	},
	componentDidMount: function() {
		console.log('mounted');
	},
	componentWillUnmount: function() {
		console.log('bye!');
	}
});

var App = React.createClass({
	mount: function() {
		ReactDOM.render(<Button/>, document.getElementById('app1'));
	},
	unmount: function() {
		ReactDOM.unmountComponentAtNode(document.getElementById('app1'));
	},
	render: function() {
		return (
			<div>
				<button onClick={this.mount}>Mount</button>
				<button onClick={this.unmount}>Unmount</button>
				<div id="app1"></div>				
			</div>
		);
	}
});

export default App

