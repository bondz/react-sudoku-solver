import React, { useState } from 'react';
import './style.css';
import AlertTriangle from '../../Icons/AlertTriangle/AlertTriangle';

const errorMessage = (props) => {
	let message = null;

	if (props.error === 'invalid-length') {
		message = (
			<div className={props.classes}>
				<AlertTriangle classes="App-icon abort-board" />
				<h5 className="App-status-message">
					The string length must be equal to 81
				</h5>
			</div>
		);
	} else if (props.error === 'empty-value') {
		message = (
			<div className={props.classes}>
				<AlertTriangle classes="App-icon abort-board" />
				<h4 className="App-status-abort-message">Enter a valid string</h4>
			</div>
		);
	} else if (props.error === 'invalid-value') {
		message = (
			<div className={props.classes}>
				<AlertTriangle classes="App-icon abort-board" />
				<h4 className="App-status-abort-message">
					Valid values must be . and numbers in the range 1-9
				</h4>
			</div>
		);
	} else {
		message = <div className={props.classes}></div>;
	}

	return message;
};

export default errorMessage;
