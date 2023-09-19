import { Inter } from "next/font/google";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";

const Main = styled(Stack)`
	background: linear-gradient(to right, #000000, #000080);
	height: 100vh;
	padding: 2rem 2rem;
	color: #fff;
`;
import Image from "next/image";
import { PortDisplay } from "@/components/PortDisplay";
import { offerings } from "@/constants/offerings.1";
import Navigation from "@/components/navigation";

type deckObject = [
	{
		logo: string;
		name: string;
		description: string;
	}
];

const deckObject = [
	{
		logo: "https://pbs.twimg.com/profile_images/1441196475619120641/8Q4Z2X8Y_400x400.jpg",
		name: "Sushi",
		description: "fsdfksndfdffs fefep",
		file: "dswdjede",
	},
];

export default function Home() {
	return (
		<Main>
			<Navigation />
			<PortDisplay offerings={[offerings[2]]} />
		</Main>
	);
}
