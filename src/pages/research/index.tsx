import { Inter } from "next/font/google";
import Navigation from "../../components/navigation";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import LoginComponent from "./components/LoginComponent";
import MerislabsLandingPage from "./components/MerisLandingPage";

const inter = Inter({ subsets: ["latin"] });

const Main = styled(Stack)`
	background: linear-gradient(to right, #000000, #000080);
	padding: 4rem 2rem;
	color: #fff;
`;

export default function Home() {
	return (
		<Main>
			<Navigation />
			<MerislabsLandingPage />
			<LoginComponent />
		</Main>
	);
}
