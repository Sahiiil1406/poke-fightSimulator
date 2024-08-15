import React from "react";

const AuthLayout = ({ children }) => {
	return (
		<div className="w-full h-screen flex fixed top-0 left-0 bg-black">
			<div className="flex-1 h-full p-10">
				<img
					src="bg.jpeg"
					alt="logo"
					className="w-full h-full object-contain rounded-xl"
				/>
			</div>
			<div className="flex-1 h-full flex flex-col justify-center my-8 px-12 ">
				<div className="justify-center text-center space-y-6">
					<h2 className="text-orange-600 text-5xl font-bold tracking-wide">
						Welcome back!
					</h2>
					<h1 className="text-orange-600 text-6xl font-bold  tracking-wider">
						Kreatify Studios
					</h1>
					<h4 className="text-white  text-lg tracking-wide">
						-Bringing visions to life
					</h4>
				</div>
				<div className="py-2 flex flex-col w-full scale-[0.8] ">{children}</div>
				<div className="relative bottom-[-30px]">
					<p className="px-8 text-gray-500">
						Need help? Contact kreatifysupport@gmail.com
					</p>
				</div>
			</div>
		</div>
	);
};

export default AuthLayout;
