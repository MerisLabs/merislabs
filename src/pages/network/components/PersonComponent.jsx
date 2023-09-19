import React from "react";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Image from "next/image";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import ShinnyBox from "@/components/animations";

const Main = styled(Stack)`
	background: linear-gradient(to right, #000000, #000080);
	border: 0.2px solid #fff;
	border-radius: 10px;
	margin: 1rem 0;
	padding: 2rem 2rem;
	color: #fff;
	/* select all children */
	& > * {
		color: #fff;
	}

	cursor: pointer;
	transition: box-shadow 0.3s;

	&:hover {
		box-shadow: 0 10px 10px rgba(255, 165, 0, 0.5);
		background: #000080;
		// elevate the box
		transform: translateY(-5px);
	}
`;

export default function PersonComponent({ profile }) {
	const router = useRouter();

	const handleRedirect = () => {
		router.push(`/network/${profile?.Name.replace(/\s/g, "")}`);
	};

	return (
		<Main
			direction={{ md: "column", lg: "row" }}
			justifyContent="space-between"
			alignItems={{ md: "center", lg: "center" }}
			divider={
				<Divider orientation="vertical" flexItem color="white" width="0.5px" />
			}
			onClick={handleRedirect}
		>
			<Image
				src={`/images/profiles/${profile?.Photo}`}
				alt="Picture of the author"
				width={110}
				height={110}
				style={{ borderRadius: "50%" }}
			/>

			<Stack spacing={3}>
				<Typography variant="h5">{profile?.Name}</Typography>
				<Typography variant="body">{profile?.Title}</Typography>
				<Typography variant="body">
					{profile?.Experience[0]?.Company}
				</Typography>
			</Stack>

			<Stack direction="row">
				<IconButton>
					<Link href={profile?.twitter} target="_blank" rel="noopener">
						<TwitterIcon />
					</Link>
				</IconButton>
				<IconButton>
					<Link href={profile?.telegram} target="_blank" rel="noopener">
						<TelegramIcon />
					</Link>
				</IconButton>
				<IconButton>
					<Link href={profile?.website} target="_blank" rel="noopener">
						<LanguageIcon />
					</Link>
				</IconButton>
			</Stack>
		</Main>
	);
}
