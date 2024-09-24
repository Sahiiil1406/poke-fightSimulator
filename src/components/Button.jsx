import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

// Define the styles using cva
const buttonStyles = cva(
	"rounded-full font-medium transition-all", // Base styles
	{
		variants: {
			filled: {
				true: "", // Filled styles will be added via color variants
				false: "border", // Flat style (no background, just a border)
			},
			color: {
				blue: "text-white bg-primary-blue-500 hover:bg-primary-blue-600 active:bg-primary-blue-700 border-primary-blue-500",
				red: "text-white bg-primary-red-500 hover:bg-primary-red-600 active:bg-primary-red-700 border-primary-red-500",
			},
			size: {
				sm: "px-4 py-2 text-sm",
				md: "px-6 py-3 text-base",
				lg: "px-8 py-4 text-lg",
			},
			disabled: {
				true: "opacity-50 cursor-not-allowed",
				false: "", // No extra class for the default non-disabled state
			},
		},
		compoundVariants: [
			// Handle flat variants for each color
			{
				filled: false,
				color: "blue",
				className:
					"text-primary-blue-500 hover:bg-primary-blue-50 active:bg-primary-blue-100",
			},
			{
				filled: false,
				color: "red",
				className:
					"text-primary-red-500 hover:bg-primary-red-50 active:bg-primary-red-100",
			},
		],
		defaultVariants: {
			filled: true,
			color: "blue",
			size: "md",
			disabled: false,
		},
	}
);

const Button = ({
	children,
	filled = true,
	color = "blue",
	size = "md",
	disabled = false,
	className = "",
	...props
}) => {
	const classes = twMerge(
		buttonStyles({ filled, color, size, disabled }),
		className
	);

	return (
		<button className={classes} disabled={disabled} {...props}>
			{children}
		</button>
	);
};

export default Button;
