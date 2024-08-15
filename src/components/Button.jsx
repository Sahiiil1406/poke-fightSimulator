import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

const buttonStyles = cva(
	"font-semibold rounded-md transition-colors duration-200 transition-opacity hover:opacity-[0.8]", // base classes
	{
		variants: {
			size: {
				small: "px-2 py-1 text-sm",
				medium: "px-4 py-2 text-md",
				large: "px-6 py-3 text-lg",
			},
			color: {
				orange: "",
				black: "",
			},
			variant: {
				filled: "",
				outline: "border-2",
			},
		},
		compoundVariants: [
			{
				color: "orange",
				variant: "filled",
				class: "bg-orange-500 text-white ",
			},
			{ color: "black", variant: "filled", class: "bg-black text-white" },
			{
				color: "orange",
				variant: "outline",
				class:
					"border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black",
			},
			{
				color: "black",
				variant: "outline",
				class: "border-black text-black hover:text-white hover:bg-black",
			},
		],
		defaultVariants: {
			size: "medium",
			color: "black",
			variant: "filled",
		},
	}
);

export default function Button(props) {
	const { className, children, size, color, variant, ...buttonProps } = props;

	return (
		<button
			className={twMerge(buttonStyles({ size, color, variant }), className)}
			{...buttonProps}
		>
			{children}
		</button>
	);
}
