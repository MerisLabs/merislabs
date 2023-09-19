import React from "react";
import { styled, css } from "@mui/material/styles";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Stack } from "@mui/material";

const Subheading = styled(Typography)({
	marginBottom: (theme) => theme.spacing(4),
});

const RaisingCTA = () => {
	return (
		<Stack p={8}>
			{" "}
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
				<Subheading variant="h3">READY TO TAKE THE NEXT STEP?</Subheading>
				<Typography variant="h5" maxWidth="600px" textAlign="center">
					Drop us an email here and we will get back to you as soon as possible.
				</Typography>
				<Button href="mailto:tomideadeoye@gmail.com" variant="outlined">
					Next Steps
				</Button>
			</Stack>
		</Stack>
	);
};

export default RaisingCTA;
