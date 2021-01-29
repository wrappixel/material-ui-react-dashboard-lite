import { lazy } from "react";

import { Navigate } from 'react-router-dom';
//import {History} from '../History'
//import { createBrowserHistory } from "history";
const baseUrl = '/';

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
const BlankLayout = lazy(() => import("../layouts/BlankLayout/BlankLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Home = lazy(() => import("../views/Home"));

const Error = lazy(() => import("../views/error/error"));
const Login = lazy(() => import("../views/Login"));
const DataTable = lazy(() => import("../views/Table"));
const ProfilePage = lazy(() => import("../views/Profile"));
const ChartPage = lazy(() => import("../views/Chart"));
/*****Routes******/
const ThemeRoutes = [
	{
	  path: baseUrl,
	  element: <FullLayout />,
	  children: [
		{ path: baseUrl, element: <Navigate to={`${baseUrl}home`} /> },
		{ path: "home", exact: true, element:<Home/>},
		{ path: "table", element:<DataTable/>}, 
		{ path: "profile", element:<ProfilePage/>},
		{ path: "chart", element:<ChartPage/>}, 
		{ path: '*', element: <Navigate to={`${baseUrl}auth/404`}/> }
	  ]
	},
	{
	  path: `${baseUrl}auth`,
	  element: <BlankLayout />,
	  children: [
		  { path: "404", element: <Error /> },
		  { path: "login", element: <Login /> },
	  ]
	}
  ];

export default ThemeRoutes;