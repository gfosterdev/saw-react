import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Case from "./pages/case/Case";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./styles/globals.scss";

const App = () => {
	const Layout = () => {
		return (
			<div className="main">
				<Navbar />
				<Outlet />
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/case",
					element: <Case />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default App;
