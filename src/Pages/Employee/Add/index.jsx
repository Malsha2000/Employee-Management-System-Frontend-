import React, { useState } from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const navigate = useNavigate();

	const [empID, setEmpID] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [NIC, setNIC] = useState("");
	const [address, setAddress] = useState("");
	const [position, setPosition] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async (e) => {
		e.preventDefault();

		console.log(localStorage.getItem("authToken"));

		try {
			await axios
				.post("http://localhost:5000/api/employee/add", {
					headers: {
						authToken: localStorage.getItem("authToken"),
					},

					empID: empID,
					firstName: firstName,
					lastName: lastName,
					email: email,
					phoneNumber: phoneNumber,
					NIC: NIC,
					address: address,
					position: position,
					password: password,
				})
				.then((res) => {
					console.log("add employee res", res);
					navigate("/employee/all");
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
					Add New Employee
				</h1>
			</div>
			<div className="mx-96">
				<div className="bg-gray-100 shadow-md rounded p-5 mb-10">
					<form
						className="bg-white rounded px-8 pt-6 pb-8 mb-8 shadow-md"
						onSubmit={onSubmit}>
						<div class="mb-6">
									<label
										class="block text-gray-700 text-sm font-bold mb-2"
										for="EmpID">
										Emp ID
									</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="firstname"
								type="text"
								placeholder="Emp ID"
								onChange={(e) => setEmpID(e.target.value)}
								required
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="FirstName">
								First Name
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="firstname"
								type="text"
								placeholder="First Name"
								onChange={(e) =>
									setFirstName(e.target.value)
								}
								required
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="LastName">
								Last Name
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="lastname"
								type="text"
								placeholder="Last Name"
								onChange={(e) =>
									setLastName(e.target.value)
								}
								required
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="email">
								Email
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="email"
								type="text"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="phonenumber">
								Phone Number
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="phonenumber"
								type="text"
								placeholder="Phone Number"
								onChange={(e) =>
									setPhoneNumber(e.target.value)
								}
								required
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="NIC">
								NIC
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-600 focus:shadow-outline"
								id="nic"
								type="text"
								placeholder="NIC"
								onChange={(e) => setNIC(e.target.value)}
								required
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="address">
								Address
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="address"
								type="text"
								placeholder="Address"
								onChange={(e) =>
									setAddress(e.target.value)
								}
								required
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="position">
								Position
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="position"
								type="text"
								placeholder="Position"
								onChange={(e) =>
									setPosition(e.target.value)
								}
								required
							/>
						</div>

						<div class="mb-6">
							<label
								class="block text-gray-700 text-sm font-bold mb-2"
								for="passowrd">
								Password
							</label>
							<input
								class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-1 focus:outline-blue-300 focus:shadow-outline"
								id="passowrd"
								type="password"
								placeholder="Password"
								onChange={(e) =>
									setPassword(e.target.value)
								}
								required
							/>
						</div>

						<div class="flex w-full items-center justify-center bg-grey-lighter">
							<button
								class="bg-blue-600 mx-48 mt-4 hover:bg-blue-600 text-white font-bold py-2 px-24 rounded"
								type="submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default AddEmployee;
