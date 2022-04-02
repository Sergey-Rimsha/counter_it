import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/store";
import { Provider } from 'react-redux';
import AppRedux from "./AppRedux";

ReactDOM.render(
	<React.StrictMode>
		{/*<div>asdasdasd</div>*/}
		<Provider store={store}>
			<AppRedux/>
		</Provider>
		{/*<App/>*/}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
