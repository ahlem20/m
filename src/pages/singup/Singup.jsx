import { Link } from "react-router-dom";
import { FaUpload, FaCreditCard, FaCalendarAlt, FaLock } from "react-icons/fa";
import GenderCheckbox from "./GenderCheckbox";
import RoleCheckbox from "./RoleCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
		gender: "",
		role: "",
		description: "",
		points: "",
		collegeDegree: null,
		idCard: null,
		package: "", // new state for selected package
		cardNumber: "",
		expiryDate: "",
		cvc: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleCheckboxChange1 = (role) => {
		setInputs({ ...inputs, role });
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};

	const handleFileChange = (e) => {
		const { name, files } = e.target;
		setInputs({ ...inputs, [name]: files[0] });
	};

	const handlePackageChange = (e) => {
		setInputs({ ...inputs, package: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto h-screen">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 max-h-full overflow-y-auto">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up <span className="text-bluey"> morning glory</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Full Name</span>
						</label>
						<input
							type="text"
							name="fullName"
							placeholder="John Doe"
							className="w-full input input-bordered h-10"
							value={inputs.fullName}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							name="username"
							placeholder="johndoe"
							className="w-full input input-bordered h-10"
							value={inputs.username}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label className="label p-2">
							<span className="text-base label-text">Email Address</span>
						</label>
						<input
							type="email"
							name="email"
							placeholder="johndoe@example.com"
							className="w-full input input-bordered h-10"
							value={inputs.email}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							name="password"
							placeholder="Enter Password"
							className="w-full input input-bordered h-10"
							value={inputs.password}
							onChange={handleInputChange}
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text">Confirm Password</span>
						</label>
						<input
							type="password"
							name="confirmPassword"
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10"
							value={inputs.confirmPassword}
							onChange={handleInputChange}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
					<RoleCheckbox onCheckboxChange1={handleCheckboxChange1} selectedRole={inputs.role} />

					{inputs.role === "doctor" && (
						<>
							<div>
								<label className="label">
									<span className="text-base label-text">Description</span>
								</label>
								<input
									type="text"
									name="description"
									placeholder="Enter description"
									className="w-full input input-bordered h-10"
									value={inputs.description}
									onChange={handleInputChange}
								/>
							</div>
							<div>
								<label className="label">
									<span className="text-base label-text">College Degree</span>
								</label>
								<div className="w-full flex items-center">
									<input
										type="file"
										name="collegeDegree"
										className="hidden"
										id="collegeDegree"
										onChange={handleFileChange}
									/>
									<label
										htmlFor="collegeDegree"
										className="flex items-center cursor-pointer px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none"
									>
										<FaUpload className="mr-2" /> Upload College Degree
									</label>
								</div>
							</div>
							<div>
								<label className="label">
									<span className="text-base label-text">ID Card</span>
								</label>
								<div className="w-full flex items-center">
									<input
										type="file"
										name="idCard"
										className="hidden"
										id="idCard"
										onChange={handleFileChange}
									/>
									<label
										htmlFor="idCard"
										className="flex items-center cursor-pointer px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none"
									>
										<FaUpload className="mr-2" /> Upload ID Card
									</label>
								</div>
							</div>
						</>
					)}

					{inputs.role === "sick" && (
						<div>
							<div>
								<label className="label">
									<span className="text-base label-text">ID Card</span>
								</label>
								<div className="w-full flex items-center">
									<input
										type="file"
										name="idCard"
										className="hidden"
										id="idCard"
										onChange={handleFileChange}
									/>
									<label
										htmlFor="idCard"
										className="flex items-center cursor-pointer px-4 py-2 border border-gray-300 rounded-md bg-white shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none"
									>
										<FaUpload className="mr-2" /> Upload ID Card
									</label>
								</div>
							</div>

							<div>
								<label className="label p-2">
									<span className="text-base label-text">Select Package</span>
								</label>
								<select
									name="package"
									className="w-full input input-bordered h-10"
									value={inputs.package}
									onChange={handlePackageChange}
								>
									<option value="">Select a package</option>
									<option value="basic">Basic - 500.00 DZD</option>
									<option value="premium">Premium - 1000.00 DZD</option>
									<option value="vip">VIP - 1500.00 DZD</option>
								</select>
							</div>
						</div>
					)}


					<Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
						Already have an account?
					</Link>

					<div>
						<button className="btn btn-block btn-sm mt-2 border border-slate-700" disabled={loading}>
							{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
