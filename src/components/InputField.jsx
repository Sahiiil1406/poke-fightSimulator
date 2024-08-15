import React, { useState, useEffect } from "react";

export default function InputField(props) {
	const {
		type = "text",
		placeholder = "",
		onChange,
		value,
		className = "",
		variant = "white",
		description = "",
		...inputProps
	} = props;

	const [active, setActive] = useState(false);

	useEffect(() => {
		setActive(value !== "");
	}, [value]);

	function handleOnChange(e) {
		if (onChange) {
			onChange(e);
		}
		setActive(e.target.value !== "");
	}

	return (
		<div className={`relative ${className}`}>
			<p
				className={`unselectable text-[#71718E] duration-200 absolute pointer-events-none ${
					active
						? " top-[12px] text-[10px] font-medium left-[16px] text-[]"
						: " top-[20px] left-[24px]"
				} ${variant === "white" ? " text-white" : " text-black"} `}
			>
				{placeholder}
			</p>
			<input
				value={value}
				className={` w-full h-full focus:outline-none focus:border-b-orange-500 border-solid  placeholder:text-[#71718E]   focus:border-black border-b
          ${
						active
							? " pb-[10px] pt-[24px] px-[16px]"
							: " pb-[16px] pt-[20px] px-[16px]"
					}
          ${
						variant === "white"
							? "bg-black text-white border-white"
							: "bg-white text-black border-black"
					}
        `}
				type={type}
				placeholder=""
				onChange={handleOnChange}
				{...inputProps}
			/>
			<p className="text-[12px] m-[5px] ">{description}</p>
		</div>
	);
}
