import React, { useEffect, useState } from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Notification from "../../../Components/Notification/index";

function UpdateEmployee() {
	const [isOpen, setIsOpen] = useState(false);
	const [notify, setNotify] = useState({
		isOpen: false,
		message: "",
		type: "",
	});

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const id = window.location.pathname.split("/")[3];
	let navigate = useNavigate();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [NIC, setNIC] = useState("");
	const [address, setAddress] = useState("");
	const [position, setPosition] = useState("");

	const location = useLocation();

	useEffect(() => {
		const getData = async () => {
			setFirstName(location.state.firstName);
			setLastName(location.state.lastName);
			setEmail(location.state.email);
			setPhoneNumber(location.state.phoneNumber);
			setNIC(location.state.NIC);
			setAddress(location.state.address);
			setPosition(location.state.position);
		};
		getData();
	}, [location]);

	const onSubmit = async (e) => {
		e.preventDefault();

		console.log(id);
		console.log(
			firstName,
			lastName,
			email,
			phoneNumber,
			NIC,
			address,
			position,
		);
		try {
			await axios
				.put("http://localhost:5000/api/employee/update/" + id, {
					headers: {
						authToken: localStorage.getItem("authToken"),
					},
					firstName: firstName,
					lastName: lastName,
					email: email,
					phoneNumber: phoneNumber,
					NIC: NIC,
					address: address,
					position: position,
				})
				.then((res) => {
					console.log("updated" + res.data);
					setNotify({
						isOpen: true,
						message: "Employee updated successfully",
						type: "success",
					});
					setFirstName("");
					setLastName("");
					setEmail("");
					setPhoneNumber("");
					setNIC("");
					setAddress("");
					setPosition("");
					setInterval(() => {
						navigate("/employee/all");
					}, 2500);
				})
				.catch((err) => {
					console.log(err);
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Header toggle={toggle} />
			<div className="text-center py-5">
				<h1 className="font-bold text-5xl text-black">
					Update Employees
				</h1>
			</div>
			<div className="mx-96 w-1/2 ">
				<div className="bg-gray-100 shadow-md rounded p-5 mb-10">
					<form
						className="bg-white rounded px-8 pt-6 pb-8 mb-4"
						autoComplete="off"
						onSubmit={onSubmit}>
						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="username">
								First Name
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="username"
								type="text"
								onChange={(e) =>
									setFirstName(e.target.value)
								}
								value={firstName}
								placeholder="First Name"
							/>
						</div>
						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="username">
								Last Name
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="username"
								type="text"
								onChange={(e) =>
									setLastName(e.target.value)
								}
								value={lastName}
								placeholder="Last Name"
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="username">
								Email
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="username"
								type="text"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								placeholder="Email"
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="username">
								Phone Number
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="username"
								type="text"
								onChange={(e) =>
									setPhoneNumber(e.target.value)
								}
								value={phoneNumber}
								placeholder="Phone Number"
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="username">
								NIC
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="username"
								type="text"
								onChange={(e) => setNIC(e.target.value)}
								value={NIC}
								placeholder="NIC"
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="username">
								Address
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="username"
								type="text"
								onChange={(e) =>
									setAddress(e.target.value)
								}
								value={address}
								placeholder="Address"
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="username">
								Position
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="username"
								type="text"
								onChange={(e) =>
									setPosition(e.target.value)
								}
								value={position}
								placeholder="Position"
							/>
						</div>

						<button
							type="submit"
							class="bg-blue-600 mx-48 mt-4 hover:bg-blue-600 text-white font-bold py-2 px-24 rounded">
							Update
						</button>
					</form>
				</div>
			</div>
			<Notification notify={notify} setNotify={setNotify} />
			<Footer />
		</>
	);
}

export default UpdateEmployee;
