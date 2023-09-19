import { Inter } from "next/font/google";
import Navigation from "../../components/navigation";
import styled from "@emotion/styled";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import people from "./people.json";
import React from "react";
import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LanguageIcon from "@mui/icons-material/Language";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Main = styled(Stack)`
	background: linear-gradient(to right, #000000, #000080);
	padding: 2rem 2rem;
	width: "100%";
	min-height: 100vh;
`;

const ProfileName = styled.h1`
	font-size: 24px;
	color: #333;
	margin-bottom: 5px;
	color: #fff;
`;

const ProfileTitle = styled.p`
	font-size: 16px;
	margin-bottom: 10px;
	color: #fff;
`;

const ExperienceCompany = styled.p`
	font-size: 14px;
	color: #fff;
	margin-bottom: 5px;
`;

const ExperienceDuration = styled.p`
	font-size: 12px;
	color: #fff;
`;

const ProfileLinks = styled.div`
	display: flex;
`;

const SocialLink = styled.a`
	color: #333;
	text-decoration: none;
	margin-right: 10px;
	display: flex;
	align-items: center;

	&:hover {
		color: #666;
	}
`;

const Icon = styled.img`
	width: 20px;
	height: 20px;
	margin-right: 5px;
`;

export default function Home() {
	const router = useRouter();
	const profile = people.find(
		(profile) => profile.Name.replace(/\s/g, "") === router.query.id
	);

	return (
		<Main>
			<Stack
				direction={{ sm: "column", lg: "row" }}
				spacing={2}
				sx={{
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				<Stack
					spacing={2}
					p={15}
					sx={{
						alignItems: "center",
					}}
					maxWidth={600}
				>
					<Image
						src={`/images/profiles/${profile?.Photo}`}
						alt="Picture of the author"
						width={400}
						height={400}
						style={{ borderRadius: "50%" }}
					/>

					<ProfileName>{profile?.Name}</ProfileName>
					<ProfileTitle>{profile?.Title}</ProfileTitle>
					<Typography
						variant="body2"
						fontSize={12}
						color="#fff"
						textAlign="justify"
					>
						{profile?.Summary}
					</Typography>
					<Stack direction="row">
						<IconButton>
							<Link
								href={profile?.Contact?.LinkedIn || ""}
								target="_blank"
								rel="noopener"
							>
								<TwitterIcon color="primary" />
							</Link>
						</IconButton>
						<IconButton>
							<Link
								href={profile?.Contact.LinkedIn || ""}
								target="_blank"
								rel="noopener"
							>
								<TelegramIcon color="primary" />
							</Link>
						</IconButton>
						<IconButton>
							<Link
								href={profile?.Contact.LinkedIn || ""}
								target="_blank"
								rel="noopener"
							>
								<LanguageIcon color="primary" />
							</Link>
						</IconButton>
					</Stack>
				</Stack>

				<Grid
					container
					spacing={2}
					sx={{
						width: "100%",
						justifyContent: "space-between",
					}}
				>
					{profile?.Experience.map((exp, index) => (
						<Grid
							item
							xs={12}
							sm={3}
							key={index}
							sx={{
								backgroundColor: (theme) =>
									// @ts-ignore
									theme.palette.background.backgroundAccent,

								"&:hover": {
									backgroundColor: (theme) => theme.palette.secondary.main,
									border: "1px solid #fff",
								},
								padding: "1rem 5rem",
								background: "#1a1817",
							}}
							m={1}
						>
							<ExperienceCompany>{exp.Company.toUpperCase()}</ExperienceCompany>
							<ExperienceDuration>{exp.TimePeriod}</ExperienceDuration>
						</Grid>
					))}
				</Grid>
			</Stack>
		</Main>
	);
}
