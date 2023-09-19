import { Inter } from "next/font/google";
import Navigation from "../../components/navigation";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import people from "./people.json";
import PersonComponent from "./components/PersonComponent";

const inter = Inter({ subsets: ["latin"] });

const Main = styled(Stack)`
	background: linear-gradient(to right, #000000, #000080);
	height: 100vh;
	padding: 2rem 2rem;
	color: #fff;
`;

import { Grid } from "@mui/material";

export default function Home() {
	return (
		<Main>
			<Navigation />
			<Grid container spacing={3}>
				{people.map((profile) => (
					<Grid item key={profile.Name} xs={12} sm={6} md={4}>
						<PersonComponent profile={profile} />
					</Grid>
				))}
			</Grid>
		</Main>
	);
}
