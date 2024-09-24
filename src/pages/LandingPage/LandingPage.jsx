import React from "react";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import TeamCarousel from "./components//Teams/TeamCarousel";

export default function LandingPage() {
	return (
		<>
			<HeroSection />
			<InfoSection />
			<TeamCarousel />
		</>
	);
}
