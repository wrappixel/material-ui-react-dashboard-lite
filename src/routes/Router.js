import { lazy } from "react";
import { Navigate } from 'react-router-dom';
/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout/FullLayout.js"));
const BlankLayout = lazy(() => import("../layouts/BlankLayout/BlankLayout.js"));
/****End Layouts*****/

/*****Pages******/
const Home = lazy(() => import("../views/Home"));
const Buttons = lazy(() => import("../views/Buttons"));
const Error = lazy(() => import("../views/error/error"));
const Login = lazy(() => import("../views/Login"));
const DataTable = lazy(() => import("../views/Table"));
const ProfilePage = lazy(() => import("../views/Profile"));
const ChartPage = lazy(() => import("../views/Chart"));
/*****Routes******/
const ThemeRoutes = [
	{
	  path: 'app',
	  element: <FullLayout />,
	  children: [
		{ path: "home", exact: true, element:<Home/>},
		{ path: "table", element:<DataTable/>}, 
		{ path: "profile", element:<ProfilePage/>},
		{ path: "chart", element:<ChartPage/>}, 
		{ path: '*', element: <Navigate to="/404" /> }
	  ]
	},
	{
	  path: '/',
	  element: <BlankLayout />,
	  children: [
		  { path: "buttons", element:<Buttons/>},
		  { path: "404", element: <Error /> },
		  { path: "login", element: <Login /> },
		  { path: '/', element: <Navigate to="/app/home" /> },
		  { path: "*", element:  <Navigate to="/404" /> }
	  ]
	}
  ];

export default ThemeRoutes;