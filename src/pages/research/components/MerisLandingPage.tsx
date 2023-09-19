import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import Link from "next/link";
import styled from "@emotion/styled";

const CustomButton = styled.button`
	background-color: #ff8000;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #ff9933;
	}
`;

const offerData = [
	{
		title: "Curated Data",
		description: `	We aggregate data from reputable sources and curate it to ensure accuracy and reliability.`,
	},
	{
		title: "Full Automation",
		description: `Our platform automates data collection, ensuring real-time updates for better decision-making.`,
	},
	{
		title: "Reporting Functionality",
		description: `Our platform sends automatic emails with crucial updates on your previous searches, ensuring you're always informed.`,
	},
	{
		title: "Dedicated Support",
		description: `Our team provides continuous technical assistance and customer support to make your experience seamless.`,
	},
];

const MerislabsLandingPage = () => {
	return (
		<Stack
			sx={{
				background: "linear-gradient(to right, #000000, #000080)",
			}}
		>
			<Stack direction="row" spacing={4}>
				<Box
					width="40%"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						background: "black",
					}}
				>
					<img
						src={`/images/software2.png`}
						alt="Data Analytics"
						width="40%"
						height="auto"
						style={{
							borderRadius: "10px",
							objectFit: "contain",
							maxHeight: "60vh",
						}}
					/>
				</Box>

				<Stack width="60%" justifyContent="space-evenly" px={8} spacing={4}>
					<Typography
						variant="h4"
						component="h1"
						style={{ textTransform: "uppercase", textAlign: "center" }}
					>
						Merislabs: Your Trusted Source for African Investments
					</Typography>
					<Typography
						variant="h6"
						component="p"
						style={{ textAlign: "center" }}
					>
						Are you tired of unreliable information hindering your investment
						decisions in Africa? At Merislabs, we are committed to transforming
						the investment landscape in Africa by providing you with verified
						and trustworthy data on founders and investment opportunities. With
						our platform, you can conduct due diligence more efficiently, reduce
						risks, and increase the chances of successful investments.
					</Typography>
					<Grid
						container
						justifyContent="center"
						alignItems="center"
						padding="20px 0"
						spacing={2}
					>
						{offerData.map((offer, index) => (
							<Grid item key={index} xs={12} md={6} lg={4}>
								<Box textAlign="center" marginBottom="40px">
									<Typography variant="h6" component="p">
										{offer.title}
									</Typography>
									<Typography variant="body2" component="p">
										{offer.description}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Stack>
			</Stack>
			<Box>
				{/* <div style={{ padding: "20px 0" }}>
					<Typography
						variant="body1"
						component="p"
						style={{ textAlign: "center" }}
					>
						Our Unique Offerings:
					</Typography>
				</div>

				<div style={{ padding: "20px 0" }}>
					<Typography
						variant="body1"
						component="p"
						style={{ textAlign: "center" }}
					>
						Join Merislabs today and unlock the door to a world of reliable
						data-driven investments in Africa. Embrace transparency and stay
						ahead of the curve with Merislabs – your reliable partner in the
						investment landscape. Let's shape the future together!
					</Typography>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						padding: "20px 0",
					}}
				>
					<Link href="/signup">
						<CustomButton>Get Started</CustomButton>
					</Link>
				</div>

				<Typography variant="h5" style={{ textAlign: "center" }}>
					Are you an investor or researcher seeking reliable and curated data on
					founders and investment opportunities in Africa? Look no further than
					Merislabs! Our cutting-edge data platform revolutionizes the way due
					diligence is conducted, making it easier for you to make informed
					decisions and minimize risks.
				</Typography>

				<Typography
					variant="h6"
					style={{
						textTransform: "uppercase",
						textAlign: "center",
						padding: "20px 0",
					}}
				>
					Onboard in Just 2 Weeks
				</Typography>

				<Typography variant="body1" style={{ textAlign: "center" }}>
					Time is of the essence in the world of investments. At Merislabs, we
					understand the need for speed. With our efficient onboarding process,
					you can start exploring African investment opportunities within just
					two weeks. No more waiting around for crucial information – we've got
					you covered!
				</Typography>

				<Typography
					variant="h6"
					style={{
						textTransform: "uppercase",
						textAlign: "center",
						padding: "20px 0",
					}}
				>
					Full Automation for Seamless Experience
				</Typography>

				<Typography variant="body1" style={{ textAlign: "center" }}>
					Forget manual data collection and curation hassles. At Merislabs, we
					believe in the power of automation. Our pre-programmed cron
					webscraping jobs ensure data is continuously gathered from reputable
					sources. Additionally, we maintain a seamless connection with
					databases of other verification bodies, ensuring comprehensive and
					up-to-date information at your fingertips.
				</Typography>

				<Typography
					variant="h6"
					style={{
						textTransform: "uppercase",
						textAlign: "center",
						padding: "20px 0",
					}}
				>
					Spotlight on Reporting Functionality
				</Typography>

				<Typography variant="body1" style={{ textAlign: "center" }}>
					Transparency and accountability are at the heart of what we do.
					Merislabs goes beyond providing data – we keep you informed even after
					your searches. Our platform automatically sends emails to users when
					new details emerge, such as fraud alerts or vital information that
					could impact your investment decisions. Stay in the loop, always!
				</Typography>

				<Typography
					variant="h6"
					style={{
						textTransform: "uppercase",
						textAlign: "center",
						padding: "20px 0",
					}}
				>
					Navigating Technical Limitations with Expertise
				</Typography>

				<Typography variant="body1" style={{ textAlign: "center" }}>
					While technology empowers us, we acknowledge the challenges. Our
					dedicated team at Merislabs continuously works to ensure the
					availability and accessibility of data sources, maintaining data
					quality, and adapting to the ever-changing information landscape.
					Count on us to address scalability concerns and seamlessly integrate
					with diverse systems and platforms.
				</Typography>

				<Typography
					variant="h6"
					style={{
						textTransform: "uppercase",
						textAlign: "center",
						padding: "20px 0",
					}}
				>
					Support Tailored to Your Needs
				</Typography>

				<Typography variant="body1" style={{ textAlign: "center" }}>
					We are committed to your success. Merislabs offers comprehensive
					technical assistance, customer support, onboarding, and training to
					make your experience seamless. Rest assured that our platform is
					continuously evolving to meet your needs.
				</Typography>

				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					padding="20px 0"
				>
					<Link href="/signup">
						<CustomButton>Join Merislabs Today</CustomButton>
					</Link>
				</Box>

				<Typography variant="body1" style={{ textAlign: "center" }}>
					Our mission is clear: to provide you with trustworthy and curated
					African investment data. By leveraging advanced technologies,
					strategic partnerships, and automation, Merislabs empowers you to make
					confident investment decisions.
				</Typography>

				<Typography variant="body1" style={{ textAlign: "center" }}>
					Visit www.merislabs.com and unlock the door to a world of reliable
					data-driven investments in Africa. Embrace transparency and stay ahead
					of the curve with Merislabs – your reliable partner in the investment
					landscape. Let's shape the future together!
				</Typography> */}
			</Box>
		</Stack>
	);
};

export default MerislabsLandingPage;
