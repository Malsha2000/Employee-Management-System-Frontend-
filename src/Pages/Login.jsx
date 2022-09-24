import React, { useState } from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import LoginForm from "../../Components/Login";

const Login = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header toggle={toggle} />

			<LoginForm />

			<Footer />
		</>
	);
};

export default Login;
