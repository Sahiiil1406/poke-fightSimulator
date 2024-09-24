import React from "react";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import TeamCarousel from "./components/TeamCarousel";

export default function LandingPage() {
	return (
		<>
			<HeroSection />
			<InfoSection />
			<TeamCarousel />
		</>
	);
}
