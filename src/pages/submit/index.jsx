import { Inter } from "next/font/google";
import Navigation from "../../components/navigation";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import { Button, TextField, Typography } from "@mui/material";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Main = styled(Stack)`
	background: linear-gradient(to right, #000000, #000080);
	height: 100vh;
	padding: 2rem 2rem;

	color: #fff;
	"& > *": {
		color: #fff;
	}
`;

export default function Home() {
	const router = useRouter();
	const handleSubmit = () => {
		router.push("/shootfire");
	};

	return (
		<Main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Navigation />
			<Stack spacing={3} mt={5} justifyContent="center">
				<Stack direction="row" spacing={3} alignItems="center">
					<Typography variant="h4" sx={{ color: "#fff" }} width="15%">
						Project name
					</Typography>
					<TextField
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
						fullWidth
						sx={{
							backgroundColor: "#fff",
						}}
					/>
				</Stack>
				<Stack direction="row" spacing={3} alignItems="center">
					<Typography variant="h4" sx={{ color: "#fff" }} width="15%">
						Project description
					</Typography>
					<TextField
						multiline
						rows={9}
						id="outlined-basic"
						label="Outlined"
						variant="outlined"
						fullWidth
						sx={{
							backgroundColor: "#fff",
						}}
					/>
				</Stack>
				<Button
					onClick={handleSubmit}
					variant="outlined"
					sx={{
						maxWidth: "8rem",
						alignSelf: "center",
					}}
				>
					SUBMIT
				</Button>
			</Stack>

			{/* <RaisingCTA /> */}
		</Main>
	);
}
