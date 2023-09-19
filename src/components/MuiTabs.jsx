import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function MuiTabs({ items }) {
	const [value, setValue] = React.useState("1");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				width: "100%",
				typography: "body1",
				borderBottom: 1,
				borderColor: "divider",
				borderColor: "white",
			}}
		>
			<TabContext
				value={value}
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					borderColor: "white",
				}}
			>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<TabList
						onChange={handleChange}
						textColor="secondary"
						indicatorColor="secondary"
						aria-label="lab API tabs example"
						sx={{ color: "white", borderColor: "white" }}
						centered
					>
						{items.map((item, index) => (
							<Tab
								key={index}
								label={item.title}
								value={index}
								// inkBarStyle={{ background: "orange" }}
								sx={{
									fontWeight: "normal",
									color: "white",
								}}
							/>
						))}
					</TabList>
				</Box>
				{items.map((item, index) => (
					<TabPanel key={index} value={index}>
						{item.content}
					</TabPanel>
				))}
			</TabContext>
		</Box>
	);
}
