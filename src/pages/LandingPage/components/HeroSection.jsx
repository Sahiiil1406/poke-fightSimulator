import React from "react";
import Button from "../../../components/Button";

export default function HeroSection() {
	return (
		<>
			<div className="w-full h-screen flex justify-center overflow-visible">
				<img
					className="absolute bottom-0 w-[35%] right-0"
					src="graph.png"
					alt=""
				/>
				<img className="absolute" src="map.svg" alt="" />
				<img
					className="absolute left-0 w-[20%] bottom-0"
					src="note.png"
					alt=""
				/>
				<img
					className="absolute top-[0] left-[0] w-[100%]"
					src="glow.svg"
					alt=""
				/>
				<div className="flex flex-col items-center justify-end gap-6 mt-[300px] ">
					<div className="grotesk text-center ">
						<h1 className="grotesk text-4xl md:text-5xl lg:text-5xl flex text-center justify-center">
							E-
							<p className="grotesk text-primary-blue-500">CELL</p>
						</h1>
						<h3 className="grotesk text-xl md:text-lg lg:text-xl opacity-30">
							NITK Surathkal
						</h3>
					</div>

					<img
						className="w-full max-w-[500px] h-auto z-20 object-contain grayscale  px-[40px]"
						src="bulb.png"
						style={{ aspectRatio: 0.9148 }}
						alt=""
					/>
				</div>
			</div>
			<div className="w-full h-screen"></div>
		</>
	);
}
