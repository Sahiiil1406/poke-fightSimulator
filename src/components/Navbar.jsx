import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { scrollY } = useScroll();
	const [shouldShowBackground, setShouldShowBackground] = useState(false);

	useEffect(() => {
		const updateBackground = () => {
			if (scrollY?.current > 50) {
				setShouldShowBackground(true);
			} else {
				setShouldShowBackground(false);
			}
		};

		const unsubscribe = scrollY.onChange(updateBackground);
		return () => unsubscribe();
	}, [scrollY]);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	let textcolor =
		"text-[#B2E7FF] font-medium opacity-[60%] hover:opacity-100 transition-color duration-300";

	const menuItems = ["Events", "About us", "Initiatives", "Gallery", "Contact"];

	return (
		<motion.nav
			className="fixed top-0 left-0 right-0 text-white px-12 py-6 flex justify-between items-center z-50"
			animate={{
				backgroundColor: shouldShowBackground ? "#07111b" : "transparent",
			}}
			transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.8 }}
		>
			<Link to="/">
				<img
					src="navLogo.png"
					className="object-cover w-[180px] h-full"
					alt="Logo"
				/>
			</Link>

			<ul className="relative hidden lg:flex lg:space-x-12 pr-6">
				{menuItems.map((label, index) => (
					<motion.li
						key={index}
						className="flex items-center"
						whileHover={{ scale: 1.1, opacity: 1 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<NavLink to={`/${label.toLowerCase()}`} className={`${textcolor}`}>
							{label.toUpperCase()}
						</NavLink>
					</motion.li>
				))}
			</ul>

			{/* Full-page menu overlay */}
			<motion.div
				className="overflow-hidden fixed inset-0 bg-black  flex flex-col items-center justify-center z-[60] lg:hidden"
				initial={{ x: "100%" }}
				animate={isOpen ? { x: 0 } : { x: "100%" }}
				transition={{
					type: "tween",
					duration: 0.2,
					ease: [0.25, 0.46, 0.45, 0.94],
				}}
			>
				{/* Content of the mobile menu */}
				<ul className="space-y-6 text-center text-2xl ">
					{menuItems.map((label, index) => (
						<motion.li
							key={index}
							whileHover={{ scale: 1.1 }}
							transition={{ type: "spring", stiffness: 300 }}
						>
							<NavLink
								to={`/${label.toLowerCase()}`}
								className={`grotesk font-thin ${textcolor}`}
								onClick={toggleMenu}
							>
								{label}
							</NavLink>
						</motion.li>
					))}
				</ul>
			</motion.div>
			{/* Mobile menu toggle button */}
			<motion.div
				className="fixed lg:hidden z-[70] right-10 top-9 "
				animate={{
					rotate: isOpen ? 90 : 0,
					backgroundColor: !shouldShowBackground ? "#07111b" : "transparent",
				}}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
			>
				<button onClick={toggleMenu} className="text-white focus:outline-none">
					{!isOpen ? (
						<motion.svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.2 }}
						>
							<motion.path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></motion.path>
						</motion.svg>
					) : (
						<motion.svg
							className="w-8 h-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.2 }}
						>
							<motion.path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							></motion.path>
						</motion.svg>
					)}
				</button>
			</motion.div>
		</motion.nav>
	);
};

export default Navbar;
