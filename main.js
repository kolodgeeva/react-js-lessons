import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './official_tutorial/CommentBox.js';

ReactDOM.render(<CommentBox url="/comment.json"  pollInterval={2000}/>, document.getElementById('app'));