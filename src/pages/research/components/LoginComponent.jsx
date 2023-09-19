import React, { useState } from "react";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

const Main = styled(Stack)`
	margin: 1rem auto;
	min-width: 500px;
	background: linear-gradient(to right, #000000, #000080);
	border: 0.2px solid #fff;
	border-radius: 10px;
	margin: 1rem 0;
	padding: 2rem 2rem;
	color: #fff;
	& > * {
		color: #fff;
	}
	transition: box-shadow 0.3s;
	&:hover {
		box-shadow: 0 10px 10px rgba(255, 165, 0, 0.5);
		background: #000080;
		transform: translateY(-5px);
	}
	width: fit-content; /* Set width to fit the content */
`;

const CustomInput = styled(Input)`
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 8px;
	// width: 100%;
	margin-bottom: 1rem;
`;

const CustomButton = styled(Button)`
	background-color: #ff8000;
	color: #fff;
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #ff9933;
	}
`;

export default function LoginComponent() {
	const router = useRouter();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [submitted, setSubmitted] = useState(false);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleLogin = (event) => {
		event.preventDefault();
		// Perform login logic here using the formData
		// For demonstration purposes, let's just redirect to a dashboard page
		setSubmitted(true);
	};

	return (
		<Stack direction="column" alignItems="center" justifyContent="center" p={8}>
			{!submitted ? (
				<form onSubmit={handleLogin}>
					<Main
						spacing={3}
						justifyContent="center"
						alignItems="center"
						p={8}
						// divider={<Divider orientation="horizontal" flexItem color="white" />}
					>
						<Typography variant="h5">Join Waitlist</Typography>
						<Input
							fullWidth
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleInputChange}
							sx={{
								"&::before": {
									borderColor: "white", // Set the line color to white
								},
								"&::after": {
									borderColor: "white", // Set the line color to white when focused
								},
								backgroundColor: "white",
								borderColor: "white",
								borderRadius: "5px",
								padding: "8px",
							}}
						/>
						<CustomButton type="submit" fullWidth>
							Join Waitlist
						</CustomButton>

						{/* <button>Join Waitlist</button> */}
					</Main>
				</form>
			) : (
				<Stack
					alignItems="center"
					justifyContent="space-between"
					p={8}
					sx={{
						border: "1px solid #fff",
						borderRadius: "10px",
					}}
					spacing={8}
				>
					<Typography variant="h5">
						Thank you for joining our waitlist!
					</Typography>
					<Typography variant="h6" maxWidth="600px" textAlign="center">
						We will get back to you as soon as possible.
					</Typography>
					<Button href="/" variant="outlined">
						Back to Home
					</Button>
				</Stack>
			)}
		</Stack>
	);
}
