import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const NavItem = styled(Typography)`
	color: #fff;
	text-decoration: none;
	font-size: 1rem;
	& > *,
	&,
	&:hover,
	&:active {
		color: #fff;
		text-decoration: none;
	}
	&:hover {
		text-decoration: underline;
	}
`;

class NavItems {
	constructor(id, link, subnav) {
		this.id = id;
		this.link = link;
		this.subnav = subnav;
	}
}

export const navItems = [
	new NavItems("Home", "/", []),
	new NavItems("Software", "/software", []),
	new NavItems("Research", "/research", []),
	new NavItems("Design", "/designs", []),
	// new NavItems("Network", "/network", []),
	// new NavItems("Venture", "/venture", []),
];

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<Stack
			direction="row"
			justifyContent="space-between"
			width="100%"
			alignItems="center"
			spacing={3}
			sx={{ padding: "1rem 2rem" }}
		>
			<Stack direction="row" spacing={3}>
				<Link href="/">
					<Box
						component="img"
						src="/images/zyptologo.png"
						alt="Vercel Logo"
						width="auto"
						height={60}
					/>
				</Link>
			</Stack>

			<Stack
				spacing={5}
				direction={isMobileMenuOpen ? "column" : "row"}
				alignItems={isMobileMenuOpen ? "center" : "flex-start"}
				display={{ xs: "none", sm: "none", md: "flex" }}
			>
				{navItems.map((item) => (
					<NavItem key={item.id} href={item.link} variant="body">
						<Link href={item.link}>{item.id}</Link>
					</NavItem>
				))}
			</Stack>
			{/* <Button variant="outlined" color="primary" p={4}>
				Explore
			</Button> */}

			<Button
				variant="outlined"
				color="primary"
				p={4}
				onClick={toggleMobileMenu}
				sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
			>
				Menu
			</Button>

			{isMobileMenuOpen && (
				<Stack
					direction="column"
					spacing={3}
					sx={{ width: "100%", marginTop: "1rem" }}
				>
					{navItems.map((item) => (
						<NavItem key={item.id} href={item.link} variant="body">
							<Link href={item.link}>{item.id}</Link>
						</NavItem>
					))}
				</Stack>
			)}
		</Stack>
	);
}
