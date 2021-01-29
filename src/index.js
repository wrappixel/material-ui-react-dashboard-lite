import React, { Suspense } from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { HashRouter} from "react-router-dom";
import './assets/style.css'
//import {History} from './History'
import Spinner from "./views/Spinner/Spinner";

ReactDOM.render(

	<Suspense fallback={<Spinner />}>
		<HashRouter>
			<App />
		</HashRouter>
	</Suspense>
	,
	document.getElementById('root')
);

