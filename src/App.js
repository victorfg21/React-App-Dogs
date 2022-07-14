import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import Photo from "./Components/Photo/Photo";
import NotFound from "./Components/User/NotFound";
import User from "./Components/User/User";
import UserProfile from "./Components/User/UserProfile";
import { UserStorage } from "./UserContext";

function App() {
	return (
		<UserStorage>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="login/*" element={<Login />} />
				<Route
					path="conta/*"
					element={
						<ProtectedRoute>
							<User />
						</ProtectedRoute>
					}
				/>
				<Route path="foto/:id" element={<Photo />} />
				<Route path="perfil/:user" element={<UserProfile />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</UserStorage>
	);
}

export default App;
