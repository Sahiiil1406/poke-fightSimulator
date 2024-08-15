import React from "react";

const ServicesCard = ({ service }) => {
	return (
		<div
			style={{
				background: `url(${service.background})`,
				backgroundRepeat: "none",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className=" relative flex flex-col border w-[240px] h-[280px] rounded-3xl border-1 border-white px-6 py-8 justify-around bg-gray-800 overflow-hidden"
		>
			<div className="bg-[#00000091] absolute w-full h-full top-0 left-0 z-0"></div>
			<img
				src={service.logo}
				width={60}
				height={60}
				className="z-10 mx-auto "
			/>
			<h3 className="z-10 text-center text-2xl font-bold text-white">
				{service.title}
			</h3>
			<p className="z-10 text-gray-400 text-center">{service.description}</p>
		</div>
	);
};

export default ServicesCard;
