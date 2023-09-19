import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
	{
		label: "The DAO",
		description: `To become a member of the DAO community, you need to pay $2500 or the equivalent in supported cryptocurrency to a specific vault address. This payment entitles you to receive an exclusive limited amount of governance tokens intended for voting. The DAO token can be exchanged for the governance token, which is used to vote for proposals. Voters, whether for or against a proposal, will be whitelisted to claim an airdrop of the share of the business proposal after Launchpad.`,
	},
	{
		label: "Governance",
		description: `Members of the platform with the governance token can vote for a business proposal to be accepted into the community.`,
	},
	{
		label: "LaunchPad ICO",
		description: `When a proposal is accepted, members of the community can then raise the money needed for the company to have a share of the company.`,
	},
	{
		label: "Stake System",
		description: `This is where the shares of each company are managed..`,
	},
];

export default function VerticalLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box sx={{ maxWidth: 700, color: "white" }}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((step, index) => (
					<Step key={step.label}>
						<StepLabel
							optional={
								index === 2 ? (
									<Typography variant="caption">Last step</Typography>
								) : null
							}
						>
							<Typography variant="h4" color="white">
								{" "}
								{step.label}
							</Typography>
						</StepLabel>
						<StepContent>
							<Typography variant="h6">{step.description}</Typography>
							<Box sx={{ mb: 2 }}>
								<div>
									<Button
										variant="contained"
										onClick={handleNext}
										sx={{ mt: 1, mr: 1 }}
									>
										{index === steps.length - 1 ? "Finish" : "Continue"}
									</Button>
									<Button
										disabled={index === 0}
										onClick={handleBack}
										sx={{ mt: 1, mr: 1 }}
									>
										Back
									</Button>
								</div>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} sx={{ p: 3 }}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
						Reset
					</Button>
				</Paper>
			)}
		</Box>
	);
}
