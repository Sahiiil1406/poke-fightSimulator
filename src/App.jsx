import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Footer from "./components/Footer";

export default function App() {
	return (
		<div className="w-full  bg-black  h-[100vh] flex flex-col">
			<Navbar />
			<Routes>
				<Route path="*" element={<LandingPage />} />
				<Route path="/" element={<LandingPage />} />
				<Route path="/aboutus" element={<AboutUsPage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/gallery" element={<GalleryPage />} />
				<Route path="/contact" element={<ContactPage />} />
			</Routes>
			<Footer />
		</div>
	);
}
