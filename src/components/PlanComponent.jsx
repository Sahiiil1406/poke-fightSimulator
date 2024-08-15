import React from "react";
import Button from "./Button";

const PlanComponent = () => {
	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100 pt-[80px]">
			<div className="flex gap-8 ">
				{/* The Essential Plan */}
				<div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
					<img
						src="https://pixlr.com/images/index/product-image-one.webp"
						alt="Essential Plan"
						className="w-full h-48 object-cover rounded-lg mb-4"
					/>
					<h2 className="text-lg font-bold mb-2">"The Essential"</h2>
					<p className="text-gray-800 mb-4 font-semibold text-2xl">
						Rs. 370{" "}
						<span className="line-through text-lg font-medium text-gray-400">
							Rs. 462
						</span>{" "}
						<div></div>
						<span className="text-black text-sm rounded-full bg-green-300 px-2 py-1">
							saves 20%
						</span>
					</p>
					<ul className="mb-4">
						<li className="text-gray-800">service - 1 ✓</li>
						<li className="text-gray-800">service - 2 ✓</li>
						<li className="text-gray-800">service - 3 ✓</li>
						<li className="text-gray-800">service - 4 ✗</li>
						<li className="text-gray-800">service - 5 ✗</li>
					</ul>
					<Button>Choose Plan</Button>
				</div>

				{/* The Pro Studio Plan */}
				<div className="flex-1 bg-white p-6 rounded-lg shadow-lg border-4 border-orange-500 relative top-[-40px] scale-[1.05]">
					<div className="bg-orange-500 text-white p-2 rounded-t-lg text-center mb-4">
						recommended
					</div>
					<img
						src="https://pixlr.com/images/index/product-image-one.webp"
						alt="Pro Studio Plan"
						className="w-full h-48 object-cover rounded-lg mb-4"
					/>
					<h2 className="text-lg font-bold mb-2">"The Pro Studio"</h2>
					<p className="text-gray-800 mb-4 font-semibold text-2xl">
						Rs. 750{" "}
						<span className="line-through text-lg font-medium text-gray-400">
							Rs. 937
						</span>
						<div></div>
						<span className="text-black text-sm rounded-full bg-green-300 px-2 py-1">
							saves 20%
						</span>
					</p>
					<ul className="mb-4">
						<li className="text-gray-800">service - 1 ✓</li>
						<li className="text-gray-800">service - 2 ✓</li>
						<li className="text-gray-800">service - 3 ✓</li>
						<li className="text-gray-800">service - 4 ✓</li>
						<li className="text-gray-800">service - 5 ✗</li>
					</ul>
					<Button>Choose Plan</Button>
				</div>

				{/* Elite Professional Suite Plan */}
				<div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
					<img
						src="https://pixlr.com/images/index/product-image-one.webp"
						alt="Elite Professional Suite Plan"
						className="w-full h-48 object-cover rounded-lg mb-4"
					/>
					<h2 className="text-lg font-bold mb-2">"Elite Professional Suite"</h2>
					<p className="text-gray-800 mb-4 font-semibold text-2xl">
						Rs. 1250{" "}
						<span className="line-through text-lg font-medium text-gray-400">
							Rs. 1562
						</span>
						<div></div>
						<span className="text-black text-sm rounded-full bg-green-300 px-2 py-1">
							saves 20%
						</span>
					</p>
					<ul className="mb-4">
						<li className="text-gray-800">service - 1 ✓</li>
						<li className="text-gray-800">service - 2 ✓</li>
						<li className="text-gray-800">service - 3 ✓</li>
						<li className="text-gray-800">service - 4 ✓</li>
						<li className="text-gray-800">service - 5 ✓</li>
					</ul>
					<Button>Choose Plan</Button>
				</div>
			</div>
		</div>
	);
};

export default PlanComponent;
