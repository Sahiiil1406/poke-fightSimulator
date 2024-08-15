import React, { useState } from "react";
import Button from "./Button";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	
	return (
		<>
			<nav className="navbarbg fixed top-0 left-0 right-0  text-white px-6 py-4 flex justify-between items-center z-[50]">
				<Link to="/">
					<div className="text-2xl font-bold">Kreatify.</div>
				</Link>

				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white focus:outline-none"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
				<ul className="relative hidden lg:flex lg:space-x-6">
					<li className="flex items-center">
						<NavLink to="/" className="hover:text-gray-400">
							Home
						</NavLink>
					</li>
					<li className="flex items-center">
						<NavLink to="/about" className="hover:text-gray-400">
							About
						</NavLink>
					</li>
					<li className="services-exapander relative  flex items-center">
						<NavLink to="service" className="hover:text-gray-400">
							Services
						</NavLink>
					</li>

					<li className="flex items-center">
						<NavLink to="/portfolio" className="hover:text-gray-400">
							Portfolio
						</NavLink>
					</li>
					<li className="flex items-center">
						<NavLink to="/profile" className="hover:text-gray-400">
							Profile
						</NavLink>
					</li>
					<li>
						<NavLink to="/signup">
							<Button variant="outline" color="orange">
								SignIn / SignUp
							</Button>
						</NavLink>
					</li>
				</ul>

				{/* Full-page menu overlay */}
				{isOpen && (
					<div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
						<button
							onClick={toggleMenu}
							className="absolute top-4 right-4 text-white focus:outline-none"
						>
							<svg
								className="w-8 h-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								></path>
							</svg>
						</button>
						<ul className="space-y-6 text-center text-2xl">
							<li>
								<NavLink
									href="#"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									href="#"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									About
								</NavLink>
							</li>
							<li>
								<NavLink
									href="#"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									Services
								</NavLink>
							</li>
							<li>
								<NavLink
									href="#"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									Portfolio
								</NavLink>
							</li>
							<li>
								<NavLink
									href="#"
									className="hover:text-gray-400"
									onClick={toggleMenu}
								>
									Profile
								</NavLink>
							</li>
							<li>
								<Button variant="outline" color="orange">
									SignIn / SignUp
								</Button>
							</li>
						</ul>
					</div>
				)}
			</nav>

			<ul className="services-expand hidden   bg-black mt-2 space-y-2 py-2 border border-gray-700">
				<li>
					<NavLink to="#" className="block px-4 py-2 hover:bg-gray-700">
						Service 1
					</NavLink>
				</li>
				<li>
					<NavLink to="#" className="block px-4 py-2 hover:bg-gray-700">
						Service 2
					</NavLink>
				</li>
				<li>
					<NavLink to="#" className="block px-4 py-2 hover:bg-gray-700">
						Service 3
					</NavLink>
				</li>
			</ul>
		</>
	);
};

export default Navbar;
