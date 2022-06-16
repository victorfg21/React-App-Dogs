import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./UserContext";

function App() {
	return (
		<UserStorage>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login/*" element={<Login />} />
			</Routes>
			<Footer />
		</UserStorage>
	);
}

export default App;
