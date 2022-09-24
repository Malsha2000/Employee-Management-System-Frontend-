import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Notification from "../Components/Notification/index";

export default function Employee() {
	const [notify, setNotify] = useState({
		isOpen: false,
		message: "",
		type: "",
	});

	const [updateClicked, setUpdateClicked] = useState(false);
	const [employee, setEmployees] = useState([]);
	const [empID, setEmpID] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [NIC, setNIC] = useState("");
	const [position, setPosition] = useState("");

	useEffect(() => {
		const fetchEmployee = async () => {
			const res = await axios.post(
				"http://localhost:5000/api/employee/all",
				{
					headers: {
						authToken: localStorage.getItem("authToken"),
					},
				},
			);
			setEmployees(res.data);
			console.log(res.data);
		};
		fetchEmployee();
	}, []);
	let navigate = useNavigate();

	const AddEmployee = () => {
		const path = `/employee/add`;
		navigate(path);
	};

	const handleDelete = (id) => {
		axios
			.delete(`http://localhost:5000/api/Employee/delete/${id}`, {
				headers: { authToken: localStorage.getItem("authToken") },
			})
			.then((res) => {
				console.log("deleted");
				window.location.reload();
				setNotify({
					isOpen: true,
					message: "Employee deleted successfully",
					type: "error",
				});
			})
			.catch((err) => {
				console.log("delete error" + err);
			});
	};

	const handleUpdate = async (
		id,
		e,
		empID,
		firstName,
		lastName,
		email,
		phoneNumber,
		NIC,
		address,
		position,
		password,
	) => {
		navigate(`/employee/update/${id}`, {
			state: {
				empID: empID,
				firstName: firstName,
				lastName: lastName,
				email: email,
				phoneNumber: phoneNumber,
				NIC: NIC,
				address: address,
				position: position,
				password: password,
			},
		});
	};

	const columns = [
		{ title: "Emp ID ", field: "empID" },
		{ title: "First Name", field: "firstName" },
		{ title: "Last Name", field: "lastName" },
		{ title: "Email", field: "email" },
		{ title: "Phone Number", field: "phoneNumber" },
		{ title: "NIC", field: "NIC" },
		{ title: "Position", field: "position" },
	];

	return (
		<div className="p-26">
			<div class=" items-center justify-center min-h-screen bg-white">
				<div class="col-span-12">
					<div class="overflow-auto lg:overflow-visible"></div>
					<div class="p-5 bg-gray-100 rounded-lg ">
						<div class="overflow-auto rounded-lg shadow">
							<a href="/employee/add">
								<button
									class="
                                        bg-blue-600
                                        hover:bg-blue-800
                                        text-white
                                        py-1
                                        px-3
                                        sm
                                        font-bold
                                        rounded-full mb-10                                      
                                    "
									onClick={AddEmployee}>
									ADD NEW EMPLOYEE
								</button>
							</a>
						</div>
					</div>

					<table class="w-full">
						<thead class="bg-blue-400 border-b-2 border-gray-200">
							<tr>
								<th class="p-3 text-sm font-bold tracking-wide ">
									Action
								</th>
								<th class="p-3 text-sm font-bold tracking-wide ">
									Emp ID
								</th>
								<th class="p-3 text-sm font-bold tracking-wide ">
									First Name
								</th>
								<th class="p-3 text-sm font-bold tracking-wide ">
									Last Name
								</th>
								<th class="p-3 text-sm font-bold tracking-wide ">
									Email
								</th>
								<th class="p-3 text-sm font-bold tracking-wide ">
									Phone Number
								</th>
								<th class="p-3 text-sm font-bold tracking-wide ">
									NIC
								</th>
								<th class="p-3 text-sm font-bold tracking-wide ">
									Position
								</th>
							</tr>
						</thead>
						<tbody>
							{employee.map((employee) => (
								<tr class="bg-blue-100 lg:text-black">
									<td class="p-4">									
										<a>
											<i class="material-icons-outlined text-base">
												<EditOutlined
													className="text-yellow-400 mx-2 hover:text-yellow-500"
													onClick={(e) =>
														handleUpdate(
															employee._id,
															e,
															employee.empID,
															employee.firstName,
															employee.lastName,
															employee.email,
															employee.phoneNumber,
															employee.NIC,
															employee.address,
															employee.position,
															employee.password,
														)
													}
												/>
											</i>
										</a>
										<a className="text-red-400 ml-1 hover:text-red-500">
											<i class="material-icons-round text-base">
												<DeleteOutlined
													onClick={() => {
														handleDelete(
															employee._id,
														);
													}}
												/>
											</i>
										</a>
										{updateClicked && (
											<button
												onClick={handleUpdate}
												class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-10 rounded">
												Update
											</button>
										)}
									</td>
									<td class="p-3 capitalize">
										{updateClicked ? (
											<input
												type="text"
												value={empID}
												className="rounded-sm focus:outline-1 focus:outline-blue-500 focus:shadow-outline"
												onChange={(e) =>
													setEmpID(
														e.target.value,
													)
												}
											/>
										) : (
											<span>{employee.empID}</span>
										)}
									</td>
									<td class="p-3">
										{updateClicked ? (
											<input
												type="text"
												value={firstName}
												className="rounded-sm focus:outline-1 focus:outline-blue-500 focus:shadow-outline"
												onChange={(e) =>
													setFirstName(
														e.target.value,
													)
												}
											/>
										) : (
											<span>
												{employee.firstName}
											</span>
										)}
									</td>
									<td class="p-3">
										{updateClicked ? (
											<input
												type="text"
												value={lastName}
												onChange={(e) =>
													setLastName(
														e.target.value,
													)
												}
												className="rounded-sm focus:outline-1 focus:outline-blue-500 focus:shadow-outline"
											/>
										) : (
											<span>
												{employee.lastName}
											</span>
										)}
									</td>
									<td class="p-3">
										{updateClicked ? (
											<input
												type="text"
												value={email}
												className="rounded-sm focus:outline-1 focus:outline-blue-500 focus:shadow-outline"
												onChange={(e) =>
													setEmail(
														e.target.value,
													)
												}
											/>
										) : (
											<span>{employee.email}</span>
										)}
									</td>
									<td class="p-3">
										{updateClicked ? (
											<input
												type="text"
												value={phoneNumber}
												className="rounded-sm focus:outline-1 focus:outline-blue-500 focus:shadow-outline"
												onChange={(e) =>
													setPhoneNumber(
														e.target.value,
													)
												}
											/>
										) : (
											<span>
												{employee.phoneNumber}
											</span>
										)}
									</td>
									<td class="p-3">
										{updateClicked ? (
											<input
												type="text"
												value={NIC}
												className="rounded-sm focus:outline-1 focus:outline-blue-500 focus:shadow-outline"
												onChange={(e) =>
													setNIC(e.target.value)
												}
											/>
										) : (
											<span>{employee.NIC}</span>
										)}
									</td>
									<td class="p-3 capitalize">
										{updateClicked ? (
											<input
												type="text"
												value={position}
												className="rounded-sm focus:outline-1 focus:outline-blue-500 focus:shadow-outline"
												onChange={(e) =>
													setPosition(
														e.target.value,
													)
												}
											/>
										) : (
											<span>
												{employee.position}
											</span>
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<Notification notify={notify} setNotify={setNotify} />
		</div>
	);
}
