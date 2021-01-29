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
	  path: '/demos/free-admin-templates/material-ui-dashboard-lite/',
	  element: <FullLayout />,
	  children: [
		{ path: '/demos/free-admin-templates/material-ui-dashboard-lite/', element: <Navigate to="/demos/free-admin-templates/material-ui-dashboard-lite/home" /> },
		{ path: "/demos/free-admin-templates/material-ui-dashboard-lite/home", exact: true, element:<Home/>},
		{ path: "/demos/free-admin-templates/material-ui-dashboard-lite/table", element:<DataTable/>}, 
		{ path: "/demos/free-admin-templates/material-ui-dashboard-lite/profile", element:<ProfilePage/>},
		{ path: "/demos/free-admin-templates/material-ui-dashboard-lite/chart", element:<ChartPage/>}, 
		{ path: '*', element: <Navigate to="/demos/free-admin-templates/material-ui-dashboard-lite/auth/404" /> }
	  ]
	},
	{
	  path: '/demos/free-admin-templates/material-ui-dashboard-lite/auth/',
	  element: <BlankLayout />,
	  children: [
		  { path: "404", element: <Error /> },
		  { path: "login", element: <Login /> },
		  { path: "*", element:  <Navigate to="/demos/free-admin-templates/material-ui-dashboard-lite/auth/404" /> }
	  ]
	}
  ];

export default ThemeRoutes;